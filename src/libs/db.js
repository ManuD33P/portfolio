import { connection,connect } from "mongoose";

export const conn = {
    isConnected: false,
}

export const connectDB = async () => {
    if (conn.isConnected) return;
    const {DB_URI} = process.env;

    const db = await connect(DB_URI);
    conn.isConnected = db.connections[0].readyState;

    connection.on('connected', () => {
        console.log('Mongoose connected to db');
    });

    connection.on('error', (err) => {
        console.log(`Mongoose connection error: ${err}`);
    });

    return db
}
