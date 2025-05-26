
import connectDB from "./db/index.js"
// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

dotenv.config({
    path : './env'
})

connectDB()














 //approach one:
// import express from "express"

// const app = express()

// ;(async () => { //iffi
//     try{

//        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//        app.on("error" , (error)=> {
//         console.log("Server is not running");
//         throw error
//        })
//                                                              //goo industrial practice
//        app.listen(process.env.PORT , () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//        })
//     }
//     catch(error){
//         console.log("ERROR : " , error);
//         throw error
//     }
// })()