let express=require("express")
const { materialCreate, materialView, materialDelete, materialUpdate, materialmultiDelete } = require("../../controllers/admin/materialController")
let materialRoutes=express.Router()

materialRoutes.post('/create',materialCreate)

materialRoutes.get('/view',materialView)


materialRoutes.delete('/delete/:id',materialDelete)

materialRoutes.put('/update/:id',materialUpdate)

materialRoutes.post('/multidelete',materialmultiDelete)
module.exports=materialRoutes