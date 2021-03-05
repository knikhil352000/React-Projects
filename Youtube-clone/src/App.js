import React from 'react'
import Header from './Header'
import RecommendedVideos from './RecommendedVideos'
import Sidebar from './Sidebar.js'
import './App.css'
const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
            </div>
            {/* Header */}
            {/* Sidebar */}
            {/* Recommendation */}
        </div>
    )
    
}


export default App;
