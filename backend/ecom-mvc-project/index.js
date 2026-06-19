let express=require("express")
const routes = require("./App/routes/adminRoutes")
const adminRoutes = require("./App/routes/adminRoutes")
require("dotenv").config() //ENV Read
let App=express()


App.use(express.json()) //

App.use("/admin",adminRoutes)
//htpp://localhost:8000/admin


App.listen(process.env.PORT || 8000,()=>{
    console.log("Server Start")
})

//htpp://localhost:8000/