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
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                Authorization: authheader.replace(/['"]+/g, ''),
                "pattern": "catch"
            }
        };

        fetch('https://books-library-dev.herokuapp.com/api/book/search',requestOptions)
            .then(res => res.json())

            .then((json) =>{
                console.log(json);
            })
    }


        return(
            <div className="ui category search bar">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        <input type = "text"
                               value={state.term}
                               onChange={(e) => setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        );
}
