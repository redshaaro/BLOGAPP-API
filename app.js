const express = require("express");
const userRouter = require("./Routes/userRoutes");
const postRouter = require("./Routes/postRoutes");
const categoryRouter = require("./Routes/categoryRoutes");
const authRouter = require("./Routes/authRoute");

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/categories", categoryRouter);

module.exports = app;
