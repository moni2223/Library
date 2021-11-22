import React from 'react';
import LoginForm from "./Login/LoginForm";
import './Login/Form.css';
import RegisterForm from "./Registration/RegisterForm";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Catalog from "./Catalog/Catalog";
import Bar from "./Catalog/bar";

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
                    <Catalog/>
                </Route>
            </Switch>
            </Router>
        )}
    }
export default App;
