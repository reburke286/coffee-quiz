const path = require("path");
const express = require("express");
// const session = require("express-session");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
//app.use(session(sess)); //I don't think I need this??
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

// const sequelize = require("./config/config");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

//I'll set this up later
// app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  //   sequelize.sync({ force: false });
});
