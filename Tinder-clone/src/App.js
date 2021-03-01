import React from 'react'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path='/chat'>
                        <Header backButton='/'/>
                        <h2>Hello chat box</h2>
                    </Route>
                    <Route path='/' >
                        <Header />
                       <TinderCards />
                       <SwipeButtons /> 
                    </Route>
                </Switch>  
            </Router>
        </div>
    )
    
}


export default App;
