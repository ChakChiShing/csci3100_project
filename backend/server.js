const express = require("express");
 require("./config/database");
//const bodyParser = require("body-parser");
var friendRouter = require("./routes/friendRouter");

const app = express();
const port = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userRouter = require("./routes/userRouter");
app.use("/users",userRouter);

app.use("/friends", friendRouter);


app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

