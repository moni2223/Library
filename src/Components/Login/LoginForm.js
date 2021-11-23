import React, {useEffect, useState} from "react";
import "./Form.css";
import logo from "./1.png";
import bigPicture from "./2.png";
import {Link, useHistory} from "react-router-dom";
import view from "./view.svg";

export default function LoginForm() {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    useEffect(() => {
        if(sessionStorage.length > 0){
            alert("You are already logged in!");
            history.push("/catalog");
        }
    });

   async function handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username,
                password:password})
        };

        fetch('https://books-library-dev.herokuapp.com/api/user/login', requestOptions)
            .then(async res => {
                if(res.status === 200) {
                const response = await res.json();
                    sessionStorage.clear();
                    sessionStorage.setItem('currentUser', JSON.stringify(response.token));
                    localStorage.clear();
                }
                 else throw new Error();
            })
            .then(response => {
                history.push("/catalog");
                })
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
        <div className='ui container logg'>
            <div className="formandlogo">
                <img alt="logo" className="logo" src={logo}/>
            <h3>WELCOME BACK!</h3>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
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
                <img src={view} alt="view_pass" className="view" onClick={showPassword}/>
                <button type="submit" className="Login" disabled={!validateForm()}><b>Login</b></button>
                <p className="Signup">You don't have an account?<Link to='/register'>Sign up here!</Link></p>
                <br/>
                <br/>
            </form>
            </div>
            <img className="big-picture" alt="side_picture" src={bigPicture}/>
        </div>
    );
}

