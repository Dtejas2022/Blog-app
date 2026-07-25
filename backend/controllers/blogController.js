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

// get single blog by id
const findSingleBlog = async (req,res)=> {
    try {
        const data = await Blogs.findById(req.params.id).populate('author','name email');
        if(data){
            return res.status(200).json({message:"Blog found", data : data});
        }
        else{
            res.status(500).json({message:"not found"});
        }

    } catch (error) {
        res.status(500).json({message:"internal server error", error});
    }
};


// update blogs

const updateBlog = async (req,res)=>{
    try {
        const {title, content} = req.body;

        const blog = await Blogs.findById(
            req.params.id,
        );

        if(!blog){
            return res.status(404).json({message:"blog not found"});
        }

        if(blog.author.toString() !== req.user.id){
            return res.status(403).json({
                message: "You are not authorized to update this blog"
            });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;

        const updateBlog = await blog.save();

        res.status(200).json({message:"Blog updated Successfully",
            updateBlog: updateBlog
        });
    } catch (error) {
        res.status(500).json({
        message: "Internal server error"
        });
    }
}

//delete blog
const deleteBlog = async (req,res)=>{
    try {

        const blog = await Blogs.findById(
            req.params.id,
        );

        if(!blog){
            return res.status(404).json({message:"blog not found"});
        }

        if(blog.author.toString() !== req.user.id){
            return res.status(403).json({
                message: "You are not authorized to delete this blog"
            });
        }

        const deleteBlog = await blog.deleteOne();

        res.status(200).json({message:"Blog deleted Successfully"});
    } catch (error) {
        console.error("Delete Blog Error:", error);

        res.status(500).json({
        message: "Internal server error"
        });
    }
}


module.exports = {createBlog, getAllBlogs, findSingleBlog, updateBlog, deleteBlog};