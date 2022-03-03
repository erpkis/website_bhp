import {addUser} from "../controllers/users_controller";

const express = require('express')

const router = express.Router()

router.post('/register', addUser)

module.exports = router