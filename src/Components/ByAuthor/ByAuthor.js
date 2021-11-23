import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import polygon from "../Catalog/polygon.svg";


export default function ByAuthor()
{
    const location = useLocation();
    const history=useHistory();

    function findBooksByAuthor(){
        return(

        location.state.books.map((book) => {
            if(book.author === location.state.author)
            {
                return(
                    <div>
                        <p>Books Found:</p>
                        <div className="book" key={book._id}>
                        <img className="image" alt="cover" src={book.image}/>
                        <p className="BookTitle">{book.name}</p>
                        <p className="Author">{book.author}</p>
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
                    </div>
                    )
            }
        })

        )}

    return findBooksByAuthor();
}