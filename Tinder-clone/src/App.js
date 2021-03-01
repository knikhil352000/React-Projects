import React from 'react'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {
    return (
        <div className="app">
            
            <Router>
                <Header /> 
                <Switch>
                    <Route path='/' >
                       <TinderCards /> 
                    </Route>
                </Switch>  
            </Router>
            <SwipeButtons />
        </div>
    )
    
}


export default App;
