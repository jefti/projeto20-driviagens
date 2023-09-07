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