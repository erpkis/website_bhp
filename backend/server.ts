import {Request, Response} from "express";
const express = require('express')
const mariadb = require('mariadb');
const cors = require('cors')


const app = express()
app.use(cors())

export interface TypedRequestBody<T> extends Express.Request {
    body: T
}

const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'ruski123',
    database: 'website_biuro'
})


async function addProductToDatabase(productName : String, productPrice: Number, productDate: Date) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`INSERT INTO products (name, price, date) VALUES ('${productName}', '${productPrice}', '${productDate}')`);
        console.log(rows);

    } catch (err) {
        throw err;
    }

}async function addUserToDatabase(email : String, login: String, password: String) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`INSERT INTO users (Login, Password, Email) VALUES ('${login}', '${password}', '${email}')`);
        console.log(rows);

    } catch (err) {
        throw err;
    }
}

app.use(express.json())
app.post('/api/insert', (req : TypedRequestBody<{name: String, price: Number, date: Date }>, res: Express.Response) => {

    const {name, price, date} = req.body
    addProductToDatabase(name, price, date)

})

app.post('/api/register', (req : TypedRequestBody<{email: String, login: String, password: String}>, res: Express.Response) => {

    const {email, login, password} = req.body
    addUserToDatabase(email, login, password)

})


app.get('/products', async (req : TypedRequestBody<{name: String, price: Number, date: Date }>, res: Response) => {
    let conn;
    try {
        conn= await pool.getConnection()
        const result = await conn.query("select * from products");
        res.json(result)
        conn.end()
    } catch (err) {
        throw err;
    }
});



app.listen(3001, () => {
    console.log('running on port 3001')

})
