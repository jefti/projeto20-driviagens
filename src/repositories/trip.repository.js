import { db } from "../database/database.connection.js";

export async function createCityDB(name){
    const createdId = await db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING id;`,[name]);
    return createdId.rows[0].id;
}

export async function checkCityDB(name){
    const select = await db.query(`SELECT * FROM cities WHERE name = $1;`,[name]);
    return select.rows;
}