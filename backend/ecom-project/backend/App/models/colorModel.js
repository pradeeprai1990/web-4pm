let mongoose=require("mongoose")

let colorSchema=mongoose.Schema(
    {
        name:{
            type:String, // red,blue,green
            minLength:[2,"color name minimum length of name is 2"], // minimum length of name is 2
            maxLength:[15," color name maximum length of name is 15"], // maximum length of name is 15
            required:[true,"color name is required"], // name is required,
           
        },
        code:{
             type:String, // red,blue,green
           minLength:[2,"code name minimum length of name is 2"], // minimum length of name is 2
            maxLength:[15," code name maximum length of name is 15"], // maximum length of name is 15
            required:[true,"code name is required"] // name is required
        },  // #fff,
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

let colorModel=mongoose.model("color",colorSchema)
module.exports=colorModel