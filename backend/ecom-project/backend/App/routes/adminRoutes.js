let express=require("express")
const colorRoutes = require("./admin/colorRoutes")
const materialRoutes = require("./admin/materialRoutes")
const countryRoutes = require("./admin/countryRoutes")
const categoryRoutes = require("./admin/categoryRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
//htpp://localhost:8000/admin/color
//Color Routes
adminRoutes.use("/material",materialRoutes)

adminRoutes.use("/country",countryRoutes)
adminRoutes.use("/category",categoryRoutes)
module.exports=adminRoutes