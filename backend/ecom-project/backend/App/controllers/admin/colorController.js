const colorModel = require("../../models/colorModel");

let colorCreate = async (req, res) => {
  let colorObj = req.body;

  try {
    let colorInserobj = {
      name: colorObj.name,
      code: colorObj.code,
      order: colorObj.order,
    };

    let colorRes = await colorModel.insertOne(colorInserobj);
    res.send({ message: "Color created successfully", status: 1, colorRes });
  } catch (err) {
    res.send({ message: "Error in color creation", status: 0, err });
  }
  // console.log(colorObj);
};

let colorView = async (req, res) => {

  let data = await colorModel.find();
  res.send({ message: "Color View", status: 1, data });

  
};
let colorDelete = (req, res) => {
  res.send({ message: "Color Delete", status: 1 });
};

let colorUpdate = (req, res) => {
  res.send({ message: "Color Update", status: 1 });
};

module.exports = { colorCreate, colorView, colorDelete, colorUpdate };
