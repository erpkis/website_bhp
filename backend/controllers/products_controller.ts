import {Request, Response} from "express";
import {pool} from "../database";




export const getProducts = async (req: Request, res: Response) => {
    let conn;
    try {
        conn= await pool.getConnection()
        const result = await conn.query("select * from products");
        res.json(result)
        conn.end()
    } catch (err) {
        throw err;
    }
};

export const addProduct = async(req: Request, next: Function) => {

    const {name, price, date} = req.body
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`INSERT INTO products (name, price, date) VALUES ('${name}', '${price}', '${date}')`);
        console.log(rows);

    } catch (err) {
        throw err;
    }

}