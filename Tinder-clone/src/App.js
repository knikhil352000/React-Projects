import React from 'react'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path='/chat/:person' >
                        <Header backButton='/'/>
                        <ChatScreen />
                    </Route>
                    <Route path='/chat' >
                        <Header backButton='/chat'/>
                        <Chats />
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
