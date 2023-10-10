const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
// const { title } = require("process");
// const { error } = require("console");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("la racine");
// });
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", {
    title: "home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
  });
});

app.use("*", (req, res) => {
  res.render("404_error", {
    title: "error",
  });
});

app.listen(port, () => {
  console.log(`le server est en marche sur le port ${port}`);
});
