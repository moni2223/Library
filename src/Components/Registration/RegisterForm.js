import React,{useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "../Login/Form.css";
import logo from "../Login/1.png";
import bigPicture from "../Login/2.png";
import view from "../Login/view.svg";

export default function RegisterForm(){
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password1,setRepeatedPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(password === password1 && checkCredentials())
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username: username,
                password:password})
            };
            fetch('https://books-library-dev.herokuapp.com/api/user/register', requestOptions)
                .then(response =>(handleRedirect(response)))
                .catch(error =>{
                    console.log("error", error)
                    alert("An error occured, please try again later.")
                });

        }

        else{
            alert("Credentials invalid. E-mail should be at least 4 characters long and Password should be 6 characters long.");
            const passes = document.getElementsByClassName("pass");
            passes[0].value = '';
            passes[1].value = '';
            }
    }
    function handleRedirect(res){
        if( res.status === 201 ){
            history.push("/login");
        }
        else alert("An error occured, please try again later.");
    }
    function checkCredentials()
    {
        var format = /[ `!#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/;
        if(!format.test(username) && username.length >= 4 && !format.test(password) && password.length >= 6)return true;
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
            <img className="logo" src={logo} alt="logo" />
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
                <label>Repeat Password:</label>
                <input
                    type="password"
                    className="pass"
                    value={password1}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                />
                <p></p>
                <img src={view} alt="view_pass" className="view" onClick={showPassword}/>
                <button type="submit" className="Login" disabled={!validateForm()}><b>Register</b></button>
                <p>You have an account?<Link to='/login'>Log in here!</Link></p>
            </form>
            <img className="big-picture" alt="side_picture" src={bigPicture}/>
        </div>
            );
}