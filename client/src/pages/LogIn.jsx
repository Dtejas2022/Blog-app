import react from 'react';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://studious-fiesta-9r96p77j76xh4vv-5000.app.github.dev/api/blog-site/login', {
                email,
                password
            });

            console.log(res.data);

            localStorage.setItem('token', res.data.token);
            console.log('token saved successfully');
        } catch (error) {
            console.log("failed Login", error);
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default LogIn;