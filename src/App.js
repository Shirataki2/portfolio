import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Head from './components/Head';
import Skill from './Skill';
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header><Head/></header>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/works' component={Skill}/>
                </div>
            </BrowserRouter>
        );
    }
}




export default App;