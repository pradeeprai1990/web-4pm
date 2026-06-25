const colorModel = require("../../models/colorModel");

let colorCreate = async (req, res) => {
  let colorObj = req.body;

  try {
    let checkColorName = await colorModel.findOne({ name: colorObj.name });
    if (checkColorName) {
      res.send({
        message: "Error in color creation",
        status: 0,
        error: {
          name: "color name already exist...",
        },
      });
    } else {
      let colorInserobj = {
        name: colorObj.name,
        code: colorObj.code,
        order: colorObj.order,
      };

      let colorRes = await colorModel.insertOne(colorInserobj);
      res.send({ message: "Color created successfully", status: 1, colorRes });
    }
  } catch (err) {
    let error = {};
    for (let errorKey in err.errors) {
      error[errorKey] = err.errors[errorKey].message;
    }
    res.send({ message: "Error in color creation", status: 0, error });
  }
  // console.log(colorObj);
};

let colorView = async (req, res) => {
  let data = await colorModel.find();
  res.send({ message: "Color View", status: 1, data });
};
let colorDelete =async (req, res) => {

  let {id}=req.params

  let delRes=await colorModel.deleteOne({_id:id})
  

  res.send({ message: "Color Delete", status: 1 ,delRes});
};

let colorUpdate =async (req, res) => {
    let colorObj = req.body;
    let {id}=req.params
 let colorUpdateobj = {
        name: colorObj.name,
        code: colorObj.code,
        order: colorObj.order,
      };

  let colorRes = await colorModel.updateOne(
          {
              _id:id
          },
          {
              $set:colorUpdateobj
          }
      );
      res.send({ message: "Country Update", status: 1 ,colorRes});

  res.send({ message: "Color Update", status: 1 });
};


let colormultiDelete=async (req,res)=>{
  let {colorIDS}=req.body //Array ["6a38dfdadaf7faa9e96213e4","6a38dfdfdaf7faa9e96213e5"]

  let delRes=await colorModel.deleteMany({_id:colorIDS})

 res.send({ message: "Color Delete", status: 1 ,delRes});
  

}
module.exports = { colorCreate, colorView, colorDelete, colorUpdate,colormultiDelete };
