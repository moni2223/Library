import React,{useState} from "react";

import "./Form.css";
import logo from "./1.png";
import bigPicture from "./2.png";
import {Link} from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function showPassword(){
        var pass = document.querySelector(".pass");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

    return (
        <div className='container'>
            <img className="logo" src={logo}/>
            <h3>WELCOME BACK!</h3>
            <form onSubmit={handleSubmit}>
                <label>E-mail:</label>
                <input
                    type="email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    className="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p></p>
                <button onClick={showPassword} className="ShowPass">Show</button>
                <button type="submit" className="Login" disabled={!validateForm()}><b>Login</b></button>
                <p>You don't have an account?<Link to='/'>Sign up here!</Link></p>
            </form>
            <img className="big-picture" src={bigPicture}/>
        </div>
    );
}