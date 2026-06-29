let express=require("express")
const { colorCreate, colorView, colorDelete, colorUpdate, colormultiDelete, changeStatus, getColorDetails } = require("../../controllers/admin/colorController")
let colorRoutes=express.Router()

colorRoutes.post('/create', colorCreate)

//http://localhost:8000/admin/color/create

colorRoutes.get('/view', colorView)


colorRoutes.delete('/delete/:id',colorDelete)

colorRoutes.post('/multidelete',colormultiDelete)

colorRoutes.put('/update/:id', colorUpdate)

colorRoutes.get('/get-detail/:id', getColorDetails)


colorRoutes.post('/changestatus/', changeStatus)
module.exports=colorRoutes