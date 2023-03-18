const express = require("express");
const categoryController=require('../Controllers/categoryController')
const router = express.Router();
router.get('/',categoryController.getCategory);
router.post('/',categoryController.addCategory);



module.exports = router;
