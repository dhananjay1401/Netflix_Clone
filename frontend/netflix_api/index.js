const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// const dotenv = require("dotenv");

// dotenv.config();

mongoose
  .connect(
    "mongodb+srv://dhananjay:dhananjay@cluster0.dbagtrb.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => console.log(err));
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend Server is Running!");
});
