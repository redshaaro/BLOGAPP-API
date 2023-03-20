const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')

const app = require("./app");
dotenv.config({ path: "./config.env" });
app.use(cors({
  origin:"'http://localhost:3000"
}))

const DB = process.env.CONNECTION_STRING.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DB");
  });

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("hello from the server");
});
