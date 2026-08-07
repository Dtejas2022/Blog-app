import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function EditBlog(){
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    useEffect(()=>{
        const fetchBlog = async () =>{
            const res = await axios.get('https://studious-fiesta-9r96p77j76xh4vv-5000.app.github.dev/api/blog-site/allBlogs');
            setBlogs(res.data.blogs);
        };

        fetchBlogs();
    },[]);

    const EditBlog = async () => {
        setTitle(res.data.title);
        setContent(res.data.content);    
    }
    return (
    <>
    <h1>Edit Blog Page</h1>

    {!blogs?(
        <h6>Loading Blogs</h6>
    ):(
        
            blogs.map((blog)=>(
                <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <li >{blog.content}</li>
                    <li>{blog.author.name}</li>
                    <li>{blog._id}</li>
                    <button onClick={EditBlog}>Edit Blog</button>
                </div>
            ))
        
    )}
    </>

    )
}

export default EditBlog;