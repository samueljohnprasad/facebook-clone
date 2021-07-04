const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const app = express();
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conneted to the mongo db server");
  }
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   res.send("welcome to homepage");
// });

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts",postRoute)
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running");
});
