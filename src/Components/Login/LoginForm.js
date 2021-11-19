import React,{useState} from "react";
import "./Form.css";
import logo from "./1.png";
import bigPicture from "./2.png";
import {Link} from "react-router-dom";
import view from "./view.svg";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI...' },
            body: JSON.stringify({ username: username,
                password:password})
        };
        fetch('https://books-library-dev.herokuapp.com/api/user/login', requestOptions)
            .then(response =>console.log(response))
            .catch(error =>{
                console.log("error", error)
                alert("An error occured, please try again later.")
            });
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
                    type="username"
                    className="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    className="pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p></p>
                <img src={view} className="view" onClick={showPassword}/>
                <button type="submit" className="Login" disabled={!validateForm()}><b>Login</b></button>
                <p>You don't have an account?<Link to='/'>Sign up here!</Link></p>
            </form>
            <img className="big-picture" src={bigPicture}/>
        </div>
    );
}