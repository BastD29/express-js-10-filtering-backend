const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const port = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "https://filtering-h43u.onrender.com",
    methods: "GET",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
