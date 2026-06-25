let mongoose=require("mongoose")

let countrySchema=mongoose.Schema(
    {
        name:{
            type:String, // metal,plastic,wood
            minLength:[2,"country name minimum length of name is 2"], // minimum length of name is 2
            maxLength:[15," country name maximum length of name is 15"], // maximum length of name is 15
            required:[true,"country name is required"], // name is required,
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

let countryModel=mongoose.model("country",countrySchema)
module.exports=countryModel
