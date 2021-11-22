import React from 'react';
import LoginForm from "./Login/LoginForm";
import './Login/Form.css';
import RegisterForm from "./Registration/RegisterForm";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Catalog from "./Catalog/Catalog";
import Bar from "./Catalog/NavBar/bar";
import SearchBar from "./Catalog/SearchBar/SearchBar";
import SingleBook from "./Catalog/SingleBook/SingleBook";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path='/'>
                <RegisterForm/>
                </Route>
                <Route path='/login'>
                    <LoginForm/>
                </Route>
                <Route path="/catalog">
                    <Bar/>
                    <SearchBar/>
                    <Catalog/>
                </Route>
                    <Route path="/book">
                        <Bar/>
                        <SingleBook/>
                    </Route>
            </Switch>
            </Router>
        )}
    }
export default App;
