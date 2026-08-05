function SingleBlog(){
    const [blog, setBlog]= useState(null);
    const {id} = useParams()

    useEffect(()=>{
        const fetchSingleBlog = async () =>{
            const res = await axios.get(`https://studious-fiesta-9r96p77j76xh4vv-5000.app.github.dev/findBlog/${id}`)
            setBlog(res.data.blog);
        }
        fetchSingleBlog();
    },[id])
    return (
        <>
            <h1>Find single blog</h1>           
                {blog? (<div>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    <p>{blog.author.name}</p>
                    </div>) : (
                        <h6>Loading....</h6>
                    ) }
                    
              
                    
                
        </>
    )
}

export default SingleBlog ;