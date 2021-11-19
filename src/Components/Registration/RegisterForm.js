import React,{useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "../Login/Form.css";
import logo from "../Login/1.png";
import bigPicture from "../Login/2.png";

export default function RegisterForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1,setRepeatedPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(password === password1 && checkCredentials()){}
        else{
            alert("Credentials invalid. E-mail should be at least 4 characters long and Password should be 6 characters long.");
            var passes = document.getElementsByClassName("pass");
            passes[0].value = '';
            passes[1].value = '';
            }
    }

    function checkCredentials()
    {
        var format = /[ `!#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/;
        if(!format.test(email) && email.length >= 4 && !format.test(password) && password.length >= 6)return true;
        else return false;
    }

    function showPassword(){
        var pass = document.getElementsByClassName("pass");
        if (pass[0].type === "password") {
            pass[0].type = "text";
            pass[1].type = "text";
        } else {
            pass[0].type = "password";
            pass[1].type = "password";
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
                <label>Repeat Password:</label>
                <input
                    type="password"
                    className="pass"
                    value={password1}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                />
                <p></p>
                <button onClick={showPassword} className="ShowPass">Show</button>
                <button type="submit" className="Login" disabled={!validateForm()}><b>Register</b></button>
                <p>You have an account?<Link to='/login'>Log in here!</Link></p>
            </form>
            <img className="big-picture" src={bigPicture}/>
        </div>
            );
}