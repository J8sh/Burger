// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Using the method overrride helps use POST and DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

//this makes able to use handlebars
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var routes = require("./controllers/burgers_controllers");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
