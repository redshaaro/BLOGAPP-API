const express = require("express");
const postController = require("../Controllers/postController");

const router = express.Router();
//creating a post
router.post("/", postController.createPost);
//get all posts
router.get("/", postController.getPosts);
//get single post
router.get("/:id", postController.getPost);
//edit post
router.put("/:id", postController.editPost);

//delete post
router.delete("/:id", postController.deletePost);

module.exports = router;
