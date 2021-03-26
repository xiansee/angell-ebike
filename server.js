const express = require("express");
const bodyParser = require("body-parser");

const content = require("./content.js");
const featureList = content.featureList;
const modelList = content.modelList;
const faqList = content.faqList;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));

let port = process.env.PORT || 7000;

const renderData = {
  featureList : featureList,
  modelList: modelList,
  faqList: faqList,
  currentYear: new Date().getFullYear()
}

app.listen(port, "192.168.0.27", () => {
  console.log("Server started at port "+ port +".");
});

app.get("/", (req, res) => {
  res.render("index", renderData);
});

app.post("/", (req, res) => {
  const submissionType = req.body["submission-type"];
  var data = {};
  if (submissionType.includes("test-ride")) {
    data = {
      email: req.body.email
    }
  } else if (submissionType.includes("contact-us")) {
    data = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
  } else {
    res.sendStatus(400);
  }
  //Do something with <data>
  res.sendStatus(200)
});
