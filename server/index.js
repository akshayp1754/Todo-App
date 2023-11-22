const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./utils/db");
const taskRoutes = require("./routes/task");
const authRoutes = require("./routes/auth");

connectDB();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`server started to ${PORT}`);
});
