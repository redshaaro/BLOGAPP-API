const { default: mongoose } = require("mongoose");

const postSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      minlength: 4,
    },
    Desc: {
      type: String,
      required: true,
      minlength: 4,
    },
    photo: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
