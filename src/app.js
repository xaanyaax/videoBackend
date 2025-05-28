import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

//app.use = middlewares
app.use(cors());

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));  //images
app.use(cookieParser());

//routes

import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users" , userRouter)


export { app }