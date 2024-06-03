import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { createComment, editComment, getComments, likeComment,deleteComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getComments/:postId", getComments);
router.put("/like-comment/:commentId", verifyUser, likeComment);
router.put("/edit-comment/:commentId", verifyUser, editComment);
router.delete("/delete-comment/:commentId", verifyUser, deleteComment);

export default router;
