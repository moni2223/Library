import React, {useState} from 'react';
import "./SearchBar.css";
import {useHistory, useLocation} from "react-router-dom";

export default function SearchBar() {

    const [found,setFound] = useState("");
    const history=useHistory();
    const authheader =  "Bearer "+ sessionStorage.getItem("currentUser");

    function onFormSubmit(event){
        event.preventDefault();
        componentDidMount();
    }

    function componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                Authorization: authheader.replace(/['"]+/g, ''),
            },
            body: JSON.stringify({pattern: found})
        };

        fetch('https://books-library-dev.herokuapp.com/api/book/search',requestOptions)
            .then( async res => await res.json())

            .then((json) =>{
                history.push({
                    pathname:"found",
                    search: '?search='+found,
                    state:json
                })
            })
    }


    return(
        <div className="ui category search bar">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Book Search:</label>
                    <input type = "text"
                           onChange={(e) => setFound(e.target.value)}/>
                </div>
            </form>
        </div>
    );
}
