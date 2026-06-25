let mongoose=require("mongoose")

let categorySchema=mongoose.Schema(
    {
        name:{
            type:String, // metal,plastic,wood
            minLength:[2,"category name minimum length of name is 2"], // minimum length of name is 2
            maxLength:[15," category name maximum length of name is 15"], // maximum length of name is 15
            required:[true,"category name is required"], // name is required,
        },
         image:{
            type:String, // metal,plastic,wood
            minLength:[2,"category image minimum length of image is 2"], // minimum length of image is 2
            maxLength:[50," category image maximum length of image is 15"], // maximum length of image is 15
            required:[true,"category image is required"], // name is required,
        },
        status:{
            type:Boolean, // true or false
            default:true // default value is true
        },
        order:{
            type:Number, // 1,2,3,4
            default:0 // default value is 0
        },
        date:{
            type:Date, // date type
            default:Date.now // default value is current date
        }
    }
)

let categoryModel=mongoose.model("category",categorySchema)
module.exports=categoryModel