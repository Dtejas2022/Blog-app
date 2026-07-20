const User =require('../models/userSchema');

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
            else{
                await User.create({
                name,
                email,
                password,
                });
                res.status(201).json({message:"User registerd sucessfully"})
            }
        
        
    } catch (error) {
        console.log("Error while registering User", error);
        return res.status(500).json({message:"Internal server error", error:error.message});
    }
};

module.exports = {registerUser};
