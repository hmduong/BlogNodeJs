const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.index);

module.exports = router;
