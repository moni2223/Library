import React from 'react';
import {Redirect} from "react-router-dom";


export default function Catalog() {

    const authheader =  `Bearer ${sessionStorage.getItem("currentUser")}`;
    async function componentDidMount() {
        console.log(sessionStorage.getItem("currentUser"));
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        Authorization: authheader
            }
        };

        fetch('https://books-library-dev.herokuapp.com/api/book',requestOptions)
            .then(async res =>
                {console.log(res);}
            )
        //const data = await response.json();
        //this.setState({ totalReactPackages: data.total })
    }



    function handleLoggedIn() {
        if (sessionStorage.length === 0) {
            alert("Please log in first!!!");
            return <Redirect to="/login"/>
        }
        else{
            componentDidMount();
            return(<div>dsds</div>);
        }
    }

    return handleLoggedIn();
}

