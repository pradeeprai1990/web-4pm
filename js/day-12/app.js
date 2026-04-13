// let obj={
//     name:"sachin",
//     age:30,
//     city:"pune",
//     contact:["1234567890","9876543210"],
//     address:{
//         street:"abc street",
//         area:"xyz area",
//         pincode:411001
//     },
//     city:"Jodhpur"
// }

// console.log(obj);


// obj.age=50 //OBject Key ->New Value Update
// obj['age']=99

// obj['email']="sachin@gmail.com" //CHeck Key already exist ->Update -> new key data insert

// let contactList=obj.contact
// console.log(obj.contact);  //["1234567890","9876543210"]


// console.log(contactList); //["1234567890","9876543210"]


// console.log(obj);
// console.log(obj.city); // dot notation "pune"
// console.log(obj["city"]); // bracket notation "pune"

// console.log(obj.address.pincode);

// let mainAddress=obj.address
// console.log(mainAddress.pincode);



// console.log(obj['address']['pincode']);

// let a=10


// a= 20


// a= 30

// console.log(a);

let user=[
    {
        name:"sachin",
        age:30,
        city:"pune",
        salary:50000
    },
    {
        name:"ravi",
        age:23,
        city:"jodhpur",
        salary:40000
    },
    {
        name:"sneha",
        age:28,
        city:"mumbai",
        salary:60000
    },
    {
        name:"priya",
        age:25,
        city:"delhi",
        salary:55000
    }
]

let newUserArray=user.map(
    (obj)=>{
        obj.salary=obj.salary+5000
        return obj
    }
)

console.log(newUserArray);

for(let obj of user){
    console.log(obj.age,obj.name,obj.city,obj.salary);
    
}


    user.forEach(  
        function( v,i  ){
            console.log(v,i);
            
        }    
    )   //Call Back Function -->Array Data Get karna

// console.log(user[1].name);


// let l=[10,20,30,40,50]

// l.forEach((v,i)=>{
//     console.log(v,i);
    
// })


// let contactList=[ "1234567890", "9876543210", "5555555555", "1111111111" ]


// function getContact(value,index){
//     console.log(value,index);
    
// }


// contactList.forEach( getContact )


// contactList.forEach(
//     function(arrayValue,arrayIndex){
//         console.log(arrayValue,arrayIndex);
        
//     }
// )


let l=[10,20,30,40,50,99]

//map - array 
//map  - new Array'
//map  - old Array each Element Changes

let newArray=l.map(
    function(value,index){
        return value+5
    }
)
console.log(l);


let newArray1=l.map((value,index)=> value+index)

console.log(newArray1);


console.log(newArray);
