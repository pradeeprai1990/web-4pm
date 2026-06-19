let express=require("express")
const enquiryRoutes = require("./App/routes/Routes")
let cors=require("cors")
require("dotenv").config()
let App=express()
App.use(express.json())//
App.use(cors())  

App.use("/enquiry",enquiryRoutes)





App.listen(process.env.PORT,
    ()=>{
        console.log("Server Start");
        
    }
)