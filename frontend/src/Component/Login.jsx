import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.get('http://localhost:3005/api/users', { email, password })
            .then((response) => {
                console.log(response.data);
                navigate('/MyData');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="content">
            <h1>WELCOME GLADIATOR </h1>
            <br />
            <input type="email" placeholder="user email" required onChange={handleEmailChange} />
            <br />
            <input type="password" placeholder="user password" required onChange={handlePasswordChange} />
            <br />
            <button onClick={handleLogin}>Send</button>
        </div>
    );
}

export default Login;
