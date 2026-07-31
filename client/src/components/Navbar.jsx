import {Link} from 'react-router-dom';

function Navbar(){
    return (
    <>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/create-blog'>Create Blog</Link></li>
            {/* <li><Link to='/edit-blog/:id'>Edit Blog</Link></li> */}
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/register'>Register</Link></li>
            {/* <li><Link to='/blog/:id'>Find Blog</Link></li> */}
        </ul>
    </>
    )
}

export default Navbar ;