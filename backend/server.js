<<<<<<< HEAD
const express = require("express");
require("./config/database");
//const bodyParser = require("body-parser");
var friendRouter = require("./routes/friendRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/friends", friendRouter);

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
=======
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://csci3100:csci3100mhero@cluster0.pkkys.mongodb.net/Mhero?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect(uri, options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//do something idk;
db.close();
>>>>>>> 4d39c79a9cf2109609e34dcd4ebe9d12de7d6c0e
