const express = require("express");
const userRouter = require("./Routes/userRoutes");
const postRouter = require("./Routes/postRoutes");
const categoryRouter = require("./Routes/categoryRoutes");
const authRouter = require("./Routes/authRoute");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/images", express.static(path.join(__dirname, "/images")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/categories", categoryRouter);

module.exports = app;
