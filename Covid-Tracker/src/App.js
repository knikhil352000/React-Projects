import React from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './App.css'
const App = () => {
    return (
        <div className="app">
            <div className="app__header">
                <h1>COVID 19 TRACKER</h1>
                <FormControl className='app__dropdown'>
                    <Select 
                        variant='outlined'
                        value='abc'
                    >
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                    </Select>
                </FormControl>
            </div>
            
            {/* Header */}
            {/* Titel + Input dropdown */}
            {/* InfoBox */}
            {/* InfoBox */}
            {/* InfoBox */}
            {/* Table */}
            {/* Map */}
        </div>
    )
}


export default App;
