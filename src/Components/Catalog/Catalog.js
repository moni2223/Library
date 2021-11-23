import React, {useEffect, useState} from 'react';
import { Redirect, useHistory} from "react-router-dom";
import "./catalog.css";
import polygon from "./polygon.svg";

export default function Catalog() {

    const [books,setBooks] = useState([]);

    let history = useHistory();

    useEffect(()=>{
        HandleRequest();
    },[]);

    const authheader =  "Bearer "+ sessionStorage.getItem("currentUser");

    async function HandleRequest() {
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
            })
    }

            function handleLoggedIn() {
            if (sessionStorage.length === 0) {
            alert("Please log in first!!!");
            return <Redirect to="/login"/>
        }

            else {
            return(
            books.map((book,index) =>{
            return(
            <div className="book" key={book._id}>
            <img className="image" alt="cover" src={book.image}/>
            <p className="BookTitle">{book.name}</p>
            <p className="Author"><button className="astext" onClick={() =>{
                history.push({
                    pathname:"/ByAuthor",
                    search: '?query='+book.author,
                    state:{books:books,
                        author:book.author
                    }
                })
            }}>{book.author}</button></p>
                <p className="Genre"><b>Genre</b>: {book.genre.name}</p>
            <span className="Created">Created On: <b>{book.createOn.slice(0,10)}</b></span>
            <span className="Updated"> Updated On: <b>{book.lastUpdateOn.slice(0,10)}</b></span>
            <button type="submit" className="moreinfo" onClick={()=>{
                history.push({
                    pathname:"/book",
                    search: '?query='+book.name,
                    state:book
                })
            }}>
            <img className="polygon" alt="polygon" src={polygon}/>
            </button>
            </div>
            )
        })
            );
        }
        }

            return handleLoggedIn();
}
