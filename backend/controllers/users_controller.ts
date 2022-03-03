import {Request, Response} from "express";
import {pool} from "../database";

export const addUser = async(req: Request, res: Response) => {

    const {email, login, password} = req.body

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`INSERT INTO users (Login, Password, Email) VALUES ('${login}', '${password}', '${email}')`);
        console.log(rows);

    } catch (err) {
        throw err;
    }

}