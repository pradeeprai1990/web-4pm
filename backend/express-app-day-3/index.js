let express = require("express");
require("dotenv").config();

let server = express();

server.use(express.json()); //Middleware

let checkToken = (req, res, next) => {
  //
  let { token } = req.query;
  if (token == "" || token == undefined || token == null) {
    let obj = {
      status: 0,
      message: "Token Not Found",
    };
    return res.send(obj);
  }

  if (token != process.env.TOKEN) {
    let obj = {
      status: 0,
      message: "    Token Not Valid",
    };
    return res.send(obj);
  }

   next()
};

// server.use(checkToken); //App Level,Route Level

server.get("/news", (req, res) => {
  // console.log(req.query);
  let { username, password } = req.query;
  console.log(req.query.username);
  console.log(req.query.password);

  let obj = {
    status: true,
    message: "News Found",
    username,
    password,
    data: [
      {
        title: "News1",
        desc: "News1",
      },
      {
        title: "News2",
        desc: "News2",
      },
    ],
  };

  res.send(obj);
});

server.get("/slider", checkToken, (req, res) => {
  let obj = {
    status: true,
    message: "Slider Found",
    data: [
      {
        title: "Slider1",
        desc: "Slider1",
      },
      {
        title: "Slider2",
        desc: "Slider2",
      },
    ],
  };

  res.send(obj);
});

server.post("/login", (req, res) => {
  console.log(req.body);

  let obj = {
    status: true,
    message: "Login Success",
    data: req.body,
  };
  res.send(obj);
});

// server.get('/product')

server.get("/news/:id", (req, res) => {
  let { id } = req.params;

  res.send("hello" + id);
});

server.listen(process.env.PORT, () => {
  console.log("Server Start", process.env.PORT);
});
