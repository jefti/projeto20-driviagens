import { db } from "../database/database.connection.js";

export async function createCityDB(name){
    const createdId = await db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING id;`,[name]);
    return createdId.rows[0];
}

export async function checkCityDB(name){
    const select = await db.query(`SELECT * FROM cities WHERE name = $1;`,[name]);
    return select.rows;
}

export async function checkDestinyDB(id){
    const select = await db.query(`SELECT * FROM cities WHERE id = $1;`,[id])
    return select.rows;
}

export async function createFlightDB(origin, destination,date){
    const createdId = await db.query(`INSERT INTO flights (origin,destination,date) VALUES ($1,$2,$3) RETURNING id;`,[origin, destination,date]);
    return createdId.rows[0].id;
}

export async function selectFlightsDB(origin,destination,filtros,page){
    let query = `
    SELECT
        f.id AS id,
        origin.name AS origin,
        destination.name AS destination,
        f.date AS date 
    FROM flights AS f 
    JOIN cities origin ON origin.id = f.origin
    JOIN cities destination ON destination.id = f.destination
    WHERE 1=1`
    let queryComplement = ` ORDER BY date;`
    const values = [];
    if(origin){
        values.push(origin);
        query+= ` AND origin.name = $${values.length}`;
    }
    if(destination){
        values.push(destination);
        query+= ` AND destination.name = $${values.length}`;
    }
    if(filtros.inicio){
        values.push(filtros.inicio);
        query+= ` AND date > $${values.length}`;
        values.push(filtros.fim);
        query+= ` AND date < $${values.length}`;

    }
    if(page>0){
        const offset = (page-1)*10;
        values.push(offset);
        queryComplement = ` ORDER BY date LIMIT 10 OFFSET $${values.length};`
    }
    const select = await db.query(query+queryComplement, values);
    return select.rows;
}