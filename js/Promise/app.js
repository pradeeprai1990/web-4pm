

let loginStatus=false

let myPromise=new Promise(
    ( success,reject )=>{
        if(loginStatus){
            success(
                {
                    status:true,
                    message:"Login Done"
                }
            )
        }

        else{
            reject(
                {
                    status:false,
                    message:"Invalid username or password"
                }
            )
        }
    }
)

// console.log(myPromise);


myPromise
.then( 
    (s)=>{
         console.log(s);
    
    } 
)
.catch(
     (error)=>{
         console.log(error);
    
    } 
)


fetch(`https://dummyjson.com/products`) //Promise
.then((res)=>{
    return res.json()
    
})
.then((finalRes)=>{
    console.log(finalRes);
    
})


//myPromise Data get using then and catch // async way


