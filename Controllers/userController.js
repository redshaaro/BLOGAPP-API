const User = require("../Models/userModel");

//UPDATE/EDIT USER DETAILS
exports.updateUser = async (req, res) => {
  const paramId = req.params.id;

  if (req.body.userId === paramId) {
    try {
      const user = await User.findById(paramId);
      Object.assign(user, req.body);
      const updatedUser = await user.save();
      res.status(200).json({
        updatedUser,
      });
    } catch (err) {
      res.status(401).json({
        message: "USER NOT FOUND",
      });
    }
  } else {
    res.status(401).json({
      message: "YOU CAN ONLY EDIT YOUR ACCOUNT",
    });
  }
};

//DELETE USER/DELETE ACCOUNT

exports.deleteUser = async (req, res) => {
  try {
    paramId = req.params.id;
    if (paramId === req.body.userId) {
      try {
        const user = await User.findById(paramId);
        const deleteduser = await User.findByIdAndDelete(paramId);
        res.status(200).json({
          user: deleteduser,
        });
      } catch (err) {
        res.status(401).json({ message: "USER NOT FOUND" });
      }
    } else {
      res.status(401).json({
        message: "YOU CAN DELETE YOUR ACCOUNT ONLY",
      });
    }
  } catch (err) {
    res.status(401).json({
      message: err,
    });
  }
};

//get the user by id

exports.getUser = async (req, res) => {
  try {
    const idParam = req.params.id;
    const user = await User.findById(idParam);
    const { Password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
