const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const layout = require("../views/layout");

router.get("/", (req, res) => {
  res.send(layout("hello"));
});

// route.post("/", (req, res, next) => {
//   //req.body
//   res.json(req.body);
// });

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
