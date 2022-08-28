import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import "./Login.css"
export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword]  =useState("");
    const navigate =useNavigate()
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        axios.post("/login",{email,password}).then(res=>{if(res.status===200)navigate("/products")}).catch(err=>alert("email or password is incorrect"))
    }
  return (
    <div className='login'>
        <div>
            <img src="images/banner-bg.svg"/>
        </div>
        <div className='login-container'>
            <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="sample@email.com"/>
        <label>Password</label>
        <input type ="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter your password"/>
        <button className='btn nav-reg'>Login</button>
        </form>
        </div>
        

    </div>
  )
}
