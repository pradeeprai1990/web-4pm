
let addData=(num1,num2)=>{
    return num1+num2
}

let minData=(num1,num2)=>{
    return num1-num2
}
let mulData=(num1,num2)=>{
    return num1*num2
}
let divData=(num1,num2)=>{
    return num1/num2
}





//"type": "commonjs" Default export
// module.exports=addData //Default export of addData function from Cal.js

module.exports={addData,minData,mulData,divData} //Named export of multiple functions from Cal.js   