import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req , res) => {
    // algorithm:>>
    // get user deatils from frontend
    // validation on name , email etc not empty
    // check if user already exist : username or email
    // check for images , check for avatar
    // upload them to cloudinary , avatar check for multer
    // create user object - create entry in db
    // remove password and refresh token feild from response
    // check for user creation
    // return response

    const {fullname , email , username , password} = req.body
    console.log("email : " , email)

    if([fullname , email , username , password].some((field) => field?.trim() === "")){   //advances coded
        throw new ApiError(400 , "all fields are required")
    }

    const existedUser = await User.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(existedUser){
        throw new ApiError(409 , "user already exist")
    }

    const avatarLocalPath = req.files?.avatar[0].path;
    const coverImageLocalPath = req.files?.coverImage[0].path

    if (!avatarLocalPath) {
        throw new ApiError(400 , "avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)          
    
    if(!avatar){
        throw new ApiError(500 , "avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar : avatar.url,
        coverImage : coverImage?.url || "", //not compulsory
        email,
        username : username.toLowerCase(),
        password

    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"  //weird syntax
    )

    if (!createdUser) {
        throw new ApiError(500 , "user not created")
    }

    return res.status(201).json(
        new ApiResponse(200 , createdUser , "user created")
      
    )
}) 

export {registerUser}