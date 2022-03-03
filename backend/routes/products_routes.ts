import {addProduct, getProducts} from "../controllers/products_controller";
const express = require('express')

const router = express.Router()

router.get('/', getProducts)

router.post('/addproduct', addProduct)


module.exports = router