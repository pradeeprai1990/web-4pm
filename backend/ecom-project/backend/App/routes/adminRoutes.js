let express=require("express")
const colorRoutes = require("./admin/colorRoutes")
const materialRoutes = require("./admin/materialRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
//htpp://localhost:8000/admin/color
//Color Routes
adminRoutes.use("/material",materialRoutes)

module.exports=adminRoutes