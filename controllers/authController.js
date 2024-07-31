import User from "../models/User.js";
import bcrypt from "bcrypt";
import { creteError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async(req , res , next) => {
    try {
        // hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashPaaword = bcrypt.hashSync(req.body.password , salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPaaword,
        });

        await newUser.save();
        res.status(201).send("user has been created")
    } catch (error) {
        next(error)
    }
}

export const login = async(req , res , next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(creteError(404 , "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password , user.password);
        if(!isPasswordCorrect) return next(creteError(400 , "Wrong username or password"));

        const token = jwt.sign({id:user._id , isAdmin: user.isAdmin} , process.env.JWT_KEY)
        const {password , isAdmin , ...otherDetails} = user._doc
        
        res.cookie("access_token" , token , {httpOnly:true}).status(201).send({...otherDetails})
    } catch (error) {
        next(error)
    }
}