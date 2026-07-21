const User =require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SALT_ROUND = 12;

//register API

const registerUser = async (req, res) => {

    try {
        const {name, email, password} = req.body;

        if(!name|| !email || !password){
            console.log("All fields are mendetory");
            return res.status(400).json({message:"All fields are mandetory"});    
        }

            const userExist = await User.findOne({email});
            if(userExist){
                return res.status(400).json({message:"User alredy exists with same email"})
            }

            // password hashing
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND );
            
            const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            });
            res.status(201).json({
                message:"User registerd sucessfully", 
                user:{
                    name:newUser.name,
                    email:newUser.email,
                }
            });
            console.log(newUser);
        } 
        catch (error) {
            console.log("Error while registering User", error);
            return res.status(500).json({message:"Internal server error", error:error.message});
        };
};

//LogIN API

const logInUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            console.log("All fields must filled");
            return res.status(401).json({message:"All fields must be filled"});
        }
        const userExist = await User.findOne({email});
        
        if(!userExist){
            console.log("User not found");
            return res.status(404).json({message:"User not found"});
        }
        //compair password
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        
        if(!isPasswordValid){
            console.log("Invalid email or password");
            return res.status(400).json({message:"Invalid email or password"});
        }

        //jwt token generation
        const payload = {
            id:userExist._id
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );

        return res.status(200).json({
            message:"Login sucessfull",
            token:token,
            user:{
                name:userExist.name,
                email:userExist.email,
            },
        });
    } catch (error) {
        console.error("internal server error",error);
        res.status(500).json({message:"internal server error"})
    }
}


const getProfile = async (req,res)=>{
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Profile details fetched successfully",
            user
        });
    } catch (error) {
        console.log("Profile error:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = {registerUser, logInUser, getProfile};
