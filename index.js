const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database");
const userRouter = require('./routes/user');
const addressRouter = require('./routes/address');


const { PORT } = require("./config/variableEnvy");

const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => res.send("Still Practice!!"));
app.use("/", userRouter );
app.use("/alamatpost", addressRouter )

// optional
// if (db) {
//   console.log("server connected database");
// } else {
//   console.log({ message: `error connected to db`, error });
// }

db.then(() => {
  console.log("connected to database");
}).catch(error => {
  console.log("error happened when to reach mongodb connection", error);
});

app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
