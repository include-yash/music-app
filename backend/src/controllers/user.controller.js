import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const userSignUp = async (req, res) => {
    try{   
        const { firstName, lastName,  email, password, accountSID, authToken, myTwilioPhoneNumber, emergencyNumber } = req.body;
        
        if(!firstName || !lastName || !email || !password || !accountSID || !authToken || !myTwilioPhoneNumber || !emergencyNumber){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let user = await User.create({
            firstName, 
            lastName,  
            email, 
            password: hashedPassword, 
            accountSID, 
            authToken, 
            myTwilioPhoneNumber, 
            emergencyNumber
        });        
        

        return res.status(200).json({
            message: "User signed up successfully",            
            success: true
        });

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Somehing went wrong, please try again later!",
            success: false
        });
    }
}

export const userLogIn = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Invalid email",
                success: false
            })
        }

        const didPasswordMatch = await bcrypt.compare(password, user.password);
        if(!didPasswordMatch){
            return res.status(400).json({
                message: "Invalid password",
                success: false
            })
        }

        const tokenData = {
            userId: user._id,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });               

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "lax" }).json({
            message: "Admin logged in successfully",
            user,      
            success: true
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Somehing went wrong, please try again later!",            
            success: false
        });
    }
}

export const userLogout = async (req, res) => {
    try {
        
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        
        return res.status(200).json({
            message: "Logged out successfully",
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again later!",
            success: false,
        });
    }
};



