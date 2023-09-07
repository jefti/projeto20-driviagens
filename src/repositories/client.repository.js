import { db } from "../database/database.connection.js";

export async function createPassengerDB(firstName,lastName){
    const createId = await db.query(`INSERT INTO passengers("firstName","lastName") VALUES ($1,$2) RETURNING id;`,[firstName,lastName]);
    //const createId = await db.query(`SELECT * FROM passengers;`)
    return createId.rows[0].id;
}

export async function checkPassengerDB(firstName, lastName){
    const select = await db.query(`SELECT * FROM passengers WHERE "firstName" = $1 AND "lastName"=$2;`,[firstName, lastName]);
    return select.rows;
}