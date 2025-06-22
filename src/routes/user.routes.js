import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
// import {upload} from "../utils/multer // if you want to use multer for file uploads
const router = Router();

router.route("/register").post(
    upload.fields([
        {
        name: "avatar" ,
        maxCount: 1
    },

    {
        name : "coverImage",
        maxcount : 1
    }
]),
    registerUser())
// router.route("/login").post(registerUser)

export default router