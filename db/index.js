const mongoose = require('mongoose')
const {urlDb} = require('../config')

mongoose.connect(urlDb, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    },err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const db = mongoose.connection

module.exports = db;