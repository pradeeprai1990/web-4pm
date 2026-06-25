let express=require("express")
const { categoryCreate, categoryView, categorymultiDelete, categoryDelete, categoryUpdate } = require("../../controllers/admin/categoryController")
let categoryRoutes=express.Router()
const multer  = require('multer')


let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/category')
    },
    filename:(req,file,cb)=>{
        cb(null,  Date.now()+ file.originalname)
    }
})


const upload = multer({storage:storage})



categoryRoutes.post('/create', upload.single("image"),   categoryCreate)

//http://localhost:8000/admin/category/create

categoryRoutes.get('/view', categoryView)


categoryRoutes.delete('/delete/:id',categoryDelete)

categoryRoutes.post('/multidelete',categorymultiDelete)

categoryRoutes.put('/update/:id', categoryUpdate)
module.exports=categoryRoutes