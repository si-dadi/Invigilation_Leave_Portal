const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI = process.env.MONGO_URI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongod successfully!!");
    })
}

module.exports = connectToMongo;


