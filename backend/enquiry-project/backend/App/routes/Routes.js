let express=require("express")
const dbConnection = require("../config/dbConnection")
const { ObjectId } = require("mongodb")

let enquiryRoutes=express.Router()

enquiryRoutes.post(
    "/create",
    async (req,res)=>{
       let dbName=await dbConnection()
        let enquiryCollection=await dbName.collection("enquiry")

        let insertObj=req.body

        let {email}=req.body
        //Check Email in MY Collection

        let checkemail=await enquiryCollection.findOne({email:email})

        if(checkemail){
            let obj={
                message:"Email Id Already exist..",
                status:false,
           
            }

           return res.send(obj)

        }
      
        let insertRes=await enquiryCollection.insertOne(insertObj)

        let obj={
            message:"Enquiry Created",
            status:true,
            insertRes
        }

        res.send(obj)


    }
)


enquiryRoutes.get(
    "/view",
   async (req,res)=>{
      let db=await dbConnection()
        let enquiryTable= db.collection("enquiry")
        let data=await enquiryTable.find().toArray()

        // let enquiryData
         let obj={
            message:"Enquiry View",
            status:true,
            data:data
        }

        res.send(obj)

    }
)


enquiryRoutes.delete(
    "/delete/:id",
    async (req,res)=>{

        let {id}=req.params
        let db=await dbConnection()
          let enquiryTable= db.collection("enquiry")
        let delRes=await enquiryTable.deleteOne({_id:new ObjectId(id)})
         let obj={
            message:"Enquiry Deleted",
            status:true,
            delRes
        }

        res.send(obj)
       // console.log(req.params); //Object { id:6a2bee50f6d31ca699831e1b }
        
    }
)

enquiryRoutes.put(
    "/update/:id",
    async (req,res)=>{
          let {id}=req.params

          let updateObj=req.body
         let db=await dbConnection()
          let enquiryTable= db.collection("enquiry")
          let updateRes=await enquiryTable.updateOne(
            {_id:new ObjectId(id)}, //Condition,
            {
                $set:updateObj
            }
          )

           let obj={
            message:"Enquiry Updated",
            status:true,
            updateRes
        }

        res.send(obj)
    }
)



enquiryRoutes.get('/view/:id',
    async (req,res)=>{
        let {id}=req.params

        let db=await dbConnection()
        let enquiryTable= db.collection("enquiry")

        let data=await enquiryTable.findOne({_id:new ObjectId(id)})

        let obj={
            message:"Enquiry View",
            status:true,
            data:data
        }

        res.send(obj)
    }
)
// let getSingleEnquiry=(req,res)=>{
    
// }



module.exports=enquiryRoutes