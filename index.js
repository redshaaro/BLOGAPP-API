const dotenv = require("dotenv");
const mongoose = require("mongoose");
 

const app = require("./app");
dotenv.config({ path: "./config.env" });


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
