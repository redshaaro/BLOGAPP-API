const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();
//user edits his/her details
router.put("/:id", userController.updateUser);
//delete account
router.delete("/:id", userController.deleteUser);
//get account
router.get("/:id", userController.getUser);

module.exports = router;
