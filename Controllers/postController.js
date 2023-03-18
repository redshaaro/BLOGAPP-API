const Post = require("../Models/postModel");

//create post
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      message: "POST CREATED",
      post: newPost,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

//GET SINGLE POST
exports.getPost = (req, res) => {
  const paramId = req.params.id;
  try {
    try {
      const post = Post.findById(paramId);
      res.status(200).json({
        data: post,
      });
    } catch (err) {
      res.status(404).json({
        message: "POST DOES NOT EXISTS",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
//GET ALL POSTS
exports.getPosts = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//EDIT
exports.editPost = async (req, res) => {
  try {
    const paramId = req.params.id;
    try {
      const editedPost = await Post.findByIdAndUpdate(paramId, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        post: editedPost,
      });
    } catch (err) {
      res.status(401).json({
        message: "POST DOES NOT EXIST",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

//DELETE
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
