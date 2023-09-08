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

export async function checkPassengerExists(id){
    const select = await db.query(`SELECT * FROM passengers WHERE id=$1;`,[id])
    return select.rows;
}

export async function checkFlightExists(id){
    const select = await db.query(`SELECT * FROM flights WHERE id=$1;`,[id])
    return select.rows;
}

export async function checkDuplicateTravel(passengerId,flightId){
    const select = await db.query(`SELECT * FROM travels WHERE "passengerId"=$1 AND "flightId"=$2;`,[passengerId,flightId])
    return select.rows;
}

export async function CreateTravelDB(passengerId,flightId){
    const createdId = await db.query(`INSERT INTO travels ("passengerId","flightId") VALUES ($1,$2) RETURNING id;`,[passengerId,flightId]);
    return createdId.rows[0];
}