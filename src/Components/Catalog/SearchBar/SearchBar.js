import React, {useState} from 'react';
import "./SearchBar.css";

export default function SearchBar() {

const [state,setState] = useState("");

    const authheader =  "Bearer "+ sessionStorage.getItem("currentUser");

    function onFormSubmit(event){
        event.preventDefault();
        setState(event);
        console.log(state.term);
        componentDidMount();
    }

    function componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                Authorization: authheader.replace(/['"]+/g, ''),
                body: JSON.stringify({pattern: 'catch'})
            }
        };
        console.log(requestOptions);

        fetch('https://books-library-dev.herokuapp.com/api/book/search',requestOptions)
            .then( async res => await res.json())

            .then((json) =>{
                console.log(json);
            })
    }


        return(
            <div className="ui category search bar">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Book Search:</label>
                        <input type = "text"
                               onChange={(e) => setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        );
}
