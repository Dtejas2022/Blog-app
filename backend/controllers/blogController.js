const Blogs = require('../models/blogSchema');


//create new blog
const createBlog = async (req, res) => {
    try {
        const {title, content} = req.body;
        const author = req.user.id;

        if (!title || !content || !author ){
            return res.status(400).json({message:"All fields are mandatory"});
        }

        const newBlog = await Blogs.create({
            title,
            content,
            author
        });

        return res.status(201).json({message:"Blog created Succesfully", newBlog:newBlog});
    } catch (error) {
        console.error("Internal server error", error);
        return res.status(500).json({messsage:"Internal server error", error:error});
    }
};

// display all blogs

const getAllBlogs = async (req,res) => {
    try{
        const allBlogs = await Blogs.find().populate('author', 'name email');

        if(allBlogs.length<1){
            return res.status(500).json({message:"Failed to get all blogs"})
        }

        return res.status(200).json({message:"All blogs fetched sucessfully", blogs:allBlogs});
    }
    catch(error) {
            console.error("Internal server error",error);
            return res.status(500).json({message:"internal server error", error});
    }
};

//get single blog by id
// const findSingleBlog = async (req,res)=> {
//     try {
//         const Id = req.body;
//         if(Id){
//             res.status(500).json()
//         }
//     } catch (error) {
        
//     }
// }


module.exports = {createBlog, getAllBlogs};