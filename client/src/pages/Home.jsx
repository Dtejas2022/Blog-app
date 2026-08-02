import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchBlogs = async ()=>{
            const res = await axios.get('https://studious-fiesta-9r96p77j76xh4vv-5000.app.github.dev/api/blog-site/allBlogs');
            setBlogs(res.data.blogs);
        }  
        
        fetchBlogs();
    },[]);

    
    return (
        <>
            <h1>
                Home Page
            </h1>

            {blogs.map((blog) => (
                <h1>{blog.title}</h1>
                <h2>{blog.author}</h2>
                <h3>{blog.content}</h3>
            ))}
        </>
    )
}
export default Home;