const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const layout = require("../views/layout");

router.get("/", (req, res) => {
  res.send(layout("hello"));
});

// route.post("/", async (req, res, next) => {
//   try{
//     const page = await Page.create({
//       title: req.body.title,
//       content: req.body.content
//     })
//   //req.body
//   //res.json(req.body);
//   await Page.save()
//   res.redirect('/');
//   } catch(error){
//     next(error)
//   }
// });

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
