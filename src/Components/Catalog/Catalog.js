import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import "./catalog.css";
import polygon from "./polygon.svg";

export default function Catalog() {

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        componentDidMount();
    },[]);

    const authheader =  "Bearer "+ sessionStorage.getItem("currentUser");

    async function componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        Authorization: authheader.replace(/['"]+/g, '')
            }
        };

        fetch('https://books-library-dev.herokuapp.com/api/book',requestOptions)
            .then(res => res.json())

            .then((json) =>{
                setBooks(json);
                console.log(json);
            })
    }



    function handleLoggedIn() {
        if (sessionStorage.length === 0) {
            alert("Please log in first!!!");
            return <Redirect to="/login"/>
        }

        else {
            return(
                books.map(book =>{
                return(
                    <div className="book">
                        <img className="image" alt="image" src={book.image}/>
                        <h4 className="Name">{book.name}</h4>
                        <p className="Author">{book.author}</p>
                        <p className="Genre">Genre: <b>{book.genre.name}</b></p>
                        <span className="Created">Created On: <b>{book.createOn.slice(0,10)}</b></span>
                           <span className="Updated"> Updated On: <b>{book.lastUpdateOn.slice(0,10)}</b></span>
                        <button type="submit" className="moreinfo" >
                            <Link to='/catalog'>
                                <img className="polygon" alt="polygon" src={polygon}/>
                            </Link>
                        </button>
                    </div>
                )
            })
            );
        }
    }

    return handleLoggedIn();
}
