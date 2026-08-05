import react from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('https://studious-fiesta-9r96p77j76xh4vv-5000.app.github.dev/api/blog-site/createBlog',{
                title,
                content
            },
            {headers : {
                Authorization : `Bearer ${token}`
            }}
        );

            console.log(res.data);
            setTitle("");
            setContent(""); 
        } catch (error) {
            console.error("failled to create new blog", error);
        }
    }
    return (
        <>
            <h1>Create new Blog</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <input 
                type="text"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                />

                <button type="submit">Create Blog</button>
            </form>
        </>
    )
}

export default CreateBlog ;