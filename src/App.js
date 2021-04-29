import React from 'react';
import "./components/FontAwesomeIcons";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar"
import Contact from "./pages/contact";
import Home from './pages/home'

function App (){
    return(
    
        <Router>
        <div className= "App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/contact" exact component = {Contact}/>
            </Switch>
        </div>
        </Router>
    
    )
}

export default App;