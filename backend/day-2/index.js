let http=require("http")

let app=http.createServer(
    (req,res)=>{

        if(req.url=="/"){
             res.end("Welcome")
        }  //http://localhost:8000
        if(req.url=="/news"){ //http://localhost:8000/news
            let obj={
                status:true,
                message:"News Found",
                data:[
                    {
                        title:"News1",
                        desc:"News1"
                    },
                     {
                        title:"News2",
                        desc:"News2"
                    }
                ]
            }

            res.end(JSON.stringify(obj))
        }
         if(req.url=="/products"){ //http://localhost:8000/news
            let obj={
                status:true,
                message:"News Produts",
                data:[
                    {
                        title:"Produts1",
                        desc:"Produts1"
                    },
                     {
                        title:"Produts1",
                        desc:"Produts2"
                    }
                ]
            }

            let {data}=obj
            // console.log(da);
            
            res.end(JSON.stringify(obj))
        }
    }

)

app.listen("8000",()=>{
    console.log("Server Start");
    
})
//http://localhost:8000

//http://localhost:8000/news