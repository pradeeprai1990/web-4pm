const materialModel = require("../../models/materialModel");

let materialCreate = async (req, res) => {
  let { name, order } = req.body;
  try {
    let obj = {
      name,
      order,
    };
    let checkMymaterial = await materialModel.findOne({ name });

    if (checkMymaterial) {
      res.send({
        message: "Error in material creation",
        status: 0,
        error: {
          name: "material name already exist...",
        },
      });
    } else {
      let materialRes = await materialModel.insertOne(obj);
      res.send({
        message: "material created successfully",
        status: 1,
        materialRes,
      });
    }
  } catch (err) {
    let error = {};
    for (let errorKey in err.errors) {
      error[errorKey] = err.errors[errorKey].message;
    }
    res.send({ message: "Error in material creation", status: 0, error });
  }
};

let materialView = async (req, res) => {
     let data = await materialModel.find();
    res.send({ message: "material View", status: 1, data });

};

let materialDelete =async (req, res) => {
    let {id}=req.params

  let delRes=await materialModel.deleteOne({_id:id})
  

  res.send({ message: "material Delete", status: 1 ,delRes});
};

let materialmultiDelete =async (req, res) => {
     let {ids}=req.body //Array ["6a38dfdadaf7faa9e96213e4","6a38dfdfdaf7faa9e96213e5"]

  let delRes=await materialModel.deleteMany({_id:ids})

 res.send({ message: "material Delete", status: 1 ,delRes});
};
let materialUpdate =async (req, res) => {
     let {id}=req.params
     let {name,order}=req.body
     let obj = {
      name,
      order,
    };

    let materialRes = await materialModel.updateOne(
        {
            _id:id
        },
        {
            $set:obj
        }
    );
    res.send({ message: "material Delete", status: 1 ,materialRes});
};

module.exports = {
  materialCreate,
  materialView,
  materialDelete,
  materialmultiDelete,
  materialUpdate,
};
