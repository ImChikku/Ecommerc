import React, { useState } from "react";
import "./Loginform.css"


const LoginForm = () => {
    
    const [popupStyle, showPopup]= useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"),3000)
    }

    return (           
        <div className="cover">
            <h1>LOGIN</h1>
            <form  action="/" method="POST">
            
            <input type="name" placeholder="USERNAME"/>
            <input type="password" placeholder="PASSWORD"/>
            <div class="butt"><input type="submit" class="btn" onClick={popup}value="LOGIN" /></div>
        </form>
        <div className={popupStyle}>
            <h3>Login failed</h3>
            <p>Username or Password Incorrect</p>
        </div>
        </div>
    )
}

export default LoginForm