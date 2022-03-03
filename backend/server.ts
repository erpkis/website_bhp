const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const productsRoutes = require('./routes/products_routes')
const usersRoutes = require('./routes/users_routes')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use('/products', productsRoutes)
app.use('/auth', usersRoutes)



app.listen(3001, () => {
    console.log('running on port 3001')

})
