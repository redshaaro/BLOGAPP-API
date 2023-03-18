const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 8,
    },
    ProfilePic: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  //run only if it's modified

  if (!this.isModified("Password")) return next();
  this.Password = await bcrypt.hash(this.Password, 10);
  next();
});
User = mongoose.model("User", userSchema);

module.exports = User;
