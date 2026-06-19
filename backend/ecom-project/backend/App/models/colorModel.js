let mongoose=require("mongoose")

let colorSchema=mongoose.Schema(
    {
        name:{
            type:String, // red,blue,green
            minLength:2, // minimum length of name is 2
            maxLength:15, // maximum length of name is 15
            require:true // name is required
        },
        code:String,  // #fff,
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