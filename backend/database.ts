const mariadb = require("mariadb");

export const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'ruski123',
    database: 'website_biuro'
})
