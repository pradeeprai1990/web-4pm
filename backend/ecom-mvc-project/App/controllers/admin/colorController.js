let colorCreate=(req,res)=>{
     res.send({message: "Color created successfully",status:1})
}

let colorView=(req,res)=>{
     res.send({message: "Color View",status:1})
}
let colorDelete=(req,res)=>{
     res.send({message: "Color Delete",status:1})
}

let colorUpdate=(req,res)=>{
     res.send({message: "Color Update",status:1})
}

module.exports={colorCreate,colorView,colorDelete,colorUpdate}