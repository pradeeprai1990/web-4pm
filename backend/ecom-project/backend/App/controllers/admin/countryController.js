const countryModel = require("../../models/countryModel");

let countryCreate = async (req, res) => {
  let { name, order } = req.body;
  try {
    let obj = {
      name,
      order,
    };
    let checkMyCountry = await countryModel.findOne({ name });

    if (checkMyCountry) {
      res.send({
        message: "Error in country creation",
        status: 0,
        error: {
          name: "country name already exist...",
        },
      });
    } else {
      let countryRes = await countryModel.insertOne(obj);
      res.send({
        message: "Country created successfully",
        status: 1,
        countryRes,
      });
    }
  } catch (err) {
    let error = {};
    for (let errorKey in err.errors) {
      error[errorKey] = err.errors[errorKey].message;
    }
    res.send({ message: "Error in Country creation", status: 0, error });
  }
};

let countryView = async (req, res) => {
     let data = await countryModel.find();
    res.send({ message: "Country View", status: 1, data });

};

let countryDelete =async (req, res) => {
    let {id}=req.params

  let delRes=await countryModel.deleteOne({_id:id})
  

  res.send({ message: "Country Delete", status: 1 ,delRes});
};

let countrymultiDelete =async (req, res) => {
     let {ids}=req.body //Array ["6a38dfdadaf7faa9e96213e4","6a38dfdfdaf7faa9e96213e5"]

  let delRes=await countryModel.deleteMany({_id:ids})

 res.send({ message: "Country Delete", status: 1 ,delRes});
};
let countryUpdate =async (req, res) => {
     let {id}=req.params
     let {name,order}=req.body
     let obj = {
      name,
      order,
    };

    let countryRes = await countryModel.updateOne(
        {
            _id:id
        },
        {
            $set:obj
        }
    );
    res.send({ message: "Country Delete", status: 1 ,countryRes});
};

module.exports = {
  countryCreate,
  countryView,
  countryDelete,
  countrymultiDelete,
  countryUpdate,
};
