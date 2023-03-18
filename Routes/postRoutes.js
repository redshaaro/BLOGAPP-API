const express = require("express");
const postController = require("../Controllers/postController");

const router = express.Router();
//creating a post
router.post("/", postController.createPost);
//get single post
router.get("/", postController.getPosts);
//get all posts
router.get("/:id", postController.getPosts);
//edit post
router.put("/:id", postController.editPost);

//delete post
router.delete("/:id", postController.deletePost);

module.exports = router;
