
// let l=[10,20,30,40,99,true,undefined,"ws"]
// console.log(l);
// console.log(l[1]);
// console.log(l[2]);
// console.log(l[6]);





// console.log(n);


// let n=Array(89,77,55,66,44,66)
// let tot=n.length //6

// for(let i=0;i<tot;i++){
//     console.log(i,n[i]);
    
// }

//  l[0] =10
//  l[1] =20
//  l[2] =30

// console.log(tot);

// console.log("wel".length)
 

// console.log(l[0]);


// let l=[10,20,30,40,99,77,"hello"]
//     //  0  1  2  3  4  5   6
// let tot=l.length //7

// for(let i=tot-1;i>=0;i--){
//     console.log(i,l[i]);
    
// }

// let l=[10,20,30,40,30] 


// for( let v of  l){
//     console.log(v);
    
// }

// for(let k in l){
//     console.log(k,l[k]);
    
// }

// let l=[1,2,3,4]
// console.log(l);

// l[3]=40 //Array Value Index Use Update
// //[1,2,3,40]
// l[1]=10
// console.log(l);
// //[1,10,3,40]


//Js For Of ->Array Value  Direct value
//Js For in -> Array Ke Index


// let l=[1,2,3,4]
// console.log(l);
// console.log("");


// for(let v of l){
//     l[3]=v
//     console.log(l);
    
// }

// console.log("");
//Round1
    //v=1
    //l[3]=v // [1,2,3,1]
//Round2
   //v=2
    //l[3]=v  // [1,2,3,2]
//Round3
    //v=3
    //l[3]=v  // [1,2,3,3]
//Round4
   //v=3
   //l[3]=v 
   // [1,2,3,3]
// console.log(l);

let l=[10,20,30,99,10,25,66,77]
// let maxValue=l[0] //10
// for(let v of l){
     

//     if(v>maxValue){
//         maxValue=v
//     }
    
// }
// console.log(maxValue);

let sum=0
for(let v of l){
    sum=sum+v
 
}

console.log(sum);


// Round 1  10>10 False  maxValue=10
// Round 2  20>10 TRUE   maxValue=20
// Round 3  30>20 TRUE   maxValue=30
// Round 4  99>30 TRUE   maxValue=99
// Round 5  10>99 False   maxValue=99
// Round 5  25>99 False   maxValue=99
// Round 5  66>99 False   maxValue=99
// Round 5  77>99 False   maxValue=99


//Array Member Sum
//Array Even Number
//Array Min Value
//Array Second large value

let n=[10,20,30,40,99,[88,77,55,66,44,22],77,55,21]
    // 0  1  2  3  4         5             6 7  8
console.log(n[5][1]);


console.log(n[5][0]);

console.log(n[5][3]);