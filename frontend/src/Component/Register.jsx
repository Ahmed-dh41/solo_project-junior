import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'
import axios from 'axios'

function Register (){
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const  [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handelRegister = () => {
        axios.post('http://localhost:3005/api/users/',{name,email,password}).then((response)=>{
            console.log(response.data);
            navigate('/MyData')
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handelNavigate = () => {
        navigate('/login')
    }
    const handelName = (e) =>{
setName(e.target.value)
    }
    const handelEmail = (e) =>{
        setEmail(e.target.value)
            }
            const handelPassword = (e) =>{
                setPassword(e.target.value)
                    }
    return (
        <div className="content">
            <h1>Welcome To Mega Store</h1>
            <br />
            <input type="text" placeholder="user name" required onChange={(e)=>handelName(e)}/>
            <br />
            <input type="email" placeholder="user email" required onChange={(e)=>handelEmail(e)}/>
            <br />
            <input type="password" placeholder="user password" required onChange={(e)=>handelPassword(e)}/>
            <br />
            <button onClick={handelRegister}>Send</button> <button onClick={handelNavigate}>Login</button>
        </div>
    )
}
export default Register