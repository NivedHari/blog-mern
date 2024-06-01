import express from "express";
const router = express.Router();
import { test, updateUser,deleteUser,signout,getUsers } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

router.get("/test", test);
router.put("/update/:userId", verifyUser, updateUser);
router.delete("/delete/:userId", verifyUser, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyUser,getUsers);

export default router;
