import React from 'react';
import LoginForm from "./Login/LoginForm";
import './Login/Form.css';
import RegisterForm from "./Registration/RegisterForm";
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Catalog from "./Catalog/Catalog";
import Bar from "./Catalog/NavBar/bar";
import SearchBar from "./Catalog/SearchBar/SearchBar";
import SingleBook from "./Catalog/SingleBook/SingleBook";
import ByAuthor from "./ByAuthor/ByAuthor";
import Settings from "./Settings/Settings";
import Found from "./Catalog/SearchBar/Found";

class App extends React.Component{

    render() {
        return (
            <Router>
                <Switch>
                <Route exact path='/'>
                <LoginForm/>
                </Route>
                <Route path='/register'>
                    <RegisterForm/>
                </Route>
                <Route path="/catalog">
                    <Bar active="catalog"/>
                    <SearchBar/>
                    <Catalog/>
                </Route>
                    <Route path="/book">
                        <Bar/>
                        <SingleBook/>
                    </Route>
                    <Route path="/ByAuthor">
                        <Bar/>
                       <ByAuthor/>
                    </Route>
                    <Route path="/settings">
                        <Bar active="settings"/>
                        <Settings/>
                    </Route>
                    <Route path="/found">
                        <Bar active="catalog"/>
                        <Found/>
                    </Route>
            </Switch>
            </Router>
        )}
    }
export default App;
