const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//db string
const uri =
  "mongodb+srv://mubarakhalaoui:Doggo123@ecommerce-cluster.shea5.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-cluster";

app.use(express.json());
app.use(cors());

//db connection
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });

//routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);
