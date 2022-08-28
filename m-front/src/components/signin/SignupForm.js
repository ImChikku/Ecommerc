import React , {useState} from "react";
import"./SignupForm.css"

const SignupForm = () => {
    const [showPopup]= useState("hide")

const popup = () => {
    showPopup("signup-popup")
    setTimeout(()=> showPopup("hide"),3000)
}


return (
    <div className="cover">
        <h1>SIGNUP</h1>
        <input type="text"placeholder="USERNAME"/>
        <input type="value"placeholder="MOBILE NUMBER"/>
        <input type="email"placeholder="EMAIL ID"/>
        <input type="password"placeholder="PASSWORD"/>
        <input type="password"placeholder="RECONFIRM PASSWORD"/>
    <div className="SIGNUP-btn" onClick={popup}>SUMBIT</div>
    </div>

)
}

export default SignupForm