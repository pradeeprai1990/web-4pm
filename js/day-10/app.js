// let count=0

// function displayName(){

//     if(count<10){
//         count++
//         console.log(count,"Welcome");
//     }
    
    
// }

// displayName()
// displayName()
// displayName()

//js function is a block of code that performs a specific task. 

//js function event .

// function addData(  num1=0,num2=0 ){
//     console.log(num1+num2); //20+30 = 50
    
// }

// addData(88,44)
// addData()

// addData(25,99) 

// addData(88)
//

// addData( 20,30  )

// let userValue1=Number(prompt("Enter The Value1")) //50
// let userValue2=Number(prompt("Enter The Value2")) //99
// addData( userValue1,userValue2) //109

//Number()



// console.log(Number("20") );

function addData(num1,num2){

    return num1+num2

    
    
}


let output=addData(25,99) //25+99 104
console.log(output);



function arraySum(array){
    // array=[54,88,99,77,55,66]
    let sum=0
    for(let v of array){
        sum=sum+v
        
    }

    return sum
    

}

let mySum=arraySum([54,88,99,77,55,66])

console.log(mySum);


let mySum1=arraySum([54,88,99,77,55,66,88,999])

console.log(mySum1);
