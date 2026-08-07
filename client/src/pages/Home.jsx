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
            
            {!blogs ? (
                <h6>Loading....</h6>
            ):(
                <ul >
               {
                blogs.map((blog)=>(
                    <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <li >{blog.content}</li>
                    <li>{blog.author.name}</li>
                    <li>{blog._id}</li>
                    </div>
                ))
               }
            </ul>
            )}
            
        </>
    )
}
export default Home;