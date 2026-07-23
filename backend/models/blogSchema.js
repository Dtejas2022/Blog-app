const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        trim : true
    },
    content : {
        type:String,
        required:true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
    {timestamps:true}
);

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;