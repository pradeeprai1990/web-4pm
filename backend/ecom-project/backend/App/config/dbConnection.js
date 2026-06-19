const mongoose = require("mongoose");

let dbConnection=async ()=>{
    await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
}

module.exports=dbConnection