let express=require("express")
let materialRoutes=express.Router()

materialRoutes.post('/create',
    (req,res)=>{
        res.send({message: "material created successfully",status:1})
    }
)

materialRoutes.get('/view',
    (req,res)=>{
        res.send({message: "material View",status:1})
    }
)


materialRoutes.delete('/delete',
    (req,res)=>{
        res.send({message: "material Delete",status:1})
    }
)

materialRoutes.put('/update',
    (req,res)=>{
        res.send({message: "material Update",status:1})
    }
)
module.exports=materialRoutes