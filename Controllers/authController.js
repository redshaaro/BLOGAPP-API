const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
//handle registeration
exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      newuser: newUser,
    });
  } catch (err) {
    res.status(400).json({
      err: err,
    });
  }
};
//handle login
exports.login = async (req, res) => {
  try {
    const found = await User.findOne({ UserName: req.body.UserName }); //search for the user name
    !found && res.status(400).json({ messaeg: "WRONG CREDENTIALS" }); //hanlde if not found
    validated = await bcrypt.compare(req.body.Password, found.Password); //if found validate the passwprd
    !validated && res.status(400).json({ message: "WRONG CREDENTIALS" }); //handle wrong password
    res.status(200).json({
      user: found, //return the auhtenticated user
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
