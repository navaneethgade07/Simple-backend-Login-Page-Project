const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    userName : String,
    passWord : String
});

module.exports = mongoose.model('login',createSchema);