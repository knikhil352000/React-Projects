import React from 'react'
import Imessage from './Imessage';
import './App.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
const App = () => {
    const user = useSelector(selectUser);
    return (
        <div className="app">
            {
                user ? <Imessage /> : <Login />
            }
        </div>
    )   
}
export default App;
