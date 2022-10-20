const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/BlogDB');
        console.log('Connect DB successfully!!!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };