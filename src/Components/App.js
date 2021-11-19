import React from 'react';
import LoginForm from "./Login/LoginForm";
import './Login/Form.css';
import RegisterForm from "./Registration/RegisterForm";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
            </Switch>
            </Router>
        )}
    }


export default App;

//<LoginForm onSubmit={this.onSearchSubmit}/>
