let express=require("express")
const { countryCreate, countryView, countryDelete, countrymultiDelete, countryUpdate } = require("../../controllers/admin/countryController")
let countryRoutes=express.Router()

countryRoutes.post('/create', countryCreate)

//http://localhost:8000/admin/country/create

countryRoutes.get('/view', countryView)


countryRoutes.delete('/delete/:id',countryDelete)

countryRoutes.post('/multidelete',countrymultiDelete)

countryRoutes.put('/update/:id', countryUpdate)
module.exports=countryRoutes