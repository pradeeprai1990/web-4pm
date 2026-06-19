let express=require("express")
const { colorCreate, colorView, colorDelete, colorUpdate } = require("../../controllers/admin/colorController")
let colorRoutes=express.Router()

colorRoutes.post('/create', colorCreate)

colorRoutes.get('/view', colorView)


colorRoutes.delete('/delete',colorDelete)

colorRoutes.put('/update', colorUpdate)
module.exports=colorRoutes