const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

/* GET home page. */
router.get('/', PostController.index);

module.exports = router;
