import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { createPost, getPosts,deletePost,updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyUser, createPost);
router.get("/getposts", getPosts);
router.delete("/delete-post/:postId/:userId", verifyUser, deletePost);
router.put("/update-post/:postId/:userId", verifyUser, updatePost);

export default router;
