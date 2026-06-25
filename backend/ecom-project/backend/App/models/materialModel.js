let mongoose=require("mongoose")

let materialSchema=mongoose.Schema(
    {
        name:{
            type:String, // metal,plastic,wood
            minLength:[2,"material name minimum length of name is 2"], // minimum length of name is 2
            maxLength:[15," material name maximum length of name is 15"], // maximum length of name is 15
            required:[true,"material name is required"], // name is required,
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

let materialModel=mongoose.model("material",materialSchema)
module.exports=materialModel