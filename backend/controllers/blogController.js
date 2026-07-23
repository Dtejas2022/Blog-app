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

        return res.status(200).json({message:"Blog created Succesfully", newBlog:newBlog});
    } catch (error) {
        console.error("Internal server error", error);
        return res.status(401).json({messsage:"Internal server error", error:error});
    }
};

module.exports = {createBlog};