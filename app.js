const express = require("express");
const app = express();
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/wiki", require("./routes/wiki"));
//app.use("/wiki", require("./routes/users"));

app.get("/", (req, res, next) => {
  res.redirect("/wiki/");
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};
init();

db.authenticate().then(() => {
  console.log("connected to the database");
});

module.exports = app;
