let express = require("express");

const routes = require("./App/routes/adminRoutes");
const adminRoutes = require("./App/routes/adminRoutes");
const dbConnection = require("./App/config/dbConnection");
let cors=require("cors")
require("dotenv").config(); //ENV Read
let App = express();
App.use(cors())
App.use(express.json()); //

App.use("/uploads/category",express.static("uploads/category"))
App.use("/uploads/slider",express.static("uploads/slider"))
App.use("/uploads/product",express.static("uploads/product"))

App.use("/admin", adminRoutes);


  App.listen(process.env.PORT || 8000, () => {
        dbConnection()
  });



//htpp://localhost:8000/admin

//htpp://localhost:8000/

// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`).then((res) => {


//     console.log(res);
    

// });
