const Post = require("./Post");

const createPostService = (title, banner, text, userId) =>
  Post.create({ title, banner, text, user: userId });

const findAllPostsService = (offset, limit) =>
  Post.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countPosts = () => Post.countDocuments();

const searchPostService = (title) =>
  Post.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

const likesService = (id, userId) =>
  Post.findOneAndUpdate(
    {
      _id: id,
      "likes.userId": { $nin: [userId] },
    },
    {
      $push: {
        likes: { userId, created: new Date() },
      },
    },
    {
      rawResult: true,
    }
  );

const commetsService = (id, message, userId) =>
  Tweet.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        comments: { userId, message, createdAt: new Date() },
      },
    },
    {
      rawResult: true,
    }
  );

module.exports = {
  createPostService,
  findAllPostsService,
  searchPostService,
  likesService,
  commetsService,
  countPosts,
};
