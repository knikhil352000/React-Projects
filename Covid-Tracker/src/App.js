import React, { useState, useEffect } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './App.css'
import InfoBox from './InfoBox'
const App = () => {
    const [countries, setCountries] = useState([
        'USA', 'UK', 'INDIA', 'BANGLADESH'
    ])
    const [country, setCountry] = useState('worldwide');

    const onCounrtyChange = async(e) => {
        const countryCode = e.target.value;
        setCountry(countryCode);
    }

    useEffect(() => {
        const getCountriesData = async() => {
            await fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => (
                    {
                        name: country.country, //United State
                        value: country.countryInfo.iso2, // UK, US
                    }
                ))
                setCountries(countries);
            })
        }
        getCountriesData();
    }, [countries])
    return (
        <div className="app">
            <div className="app__header">
                <h1>COVID 19 TRACKER</h1>
                <FormControl className='app__dropdown'>
                    <Select 
                        variant='outlined'
                        value={country}
                        onChange={onCounrtyChange}
                    >
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        {
                            countries.map(country => (
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))
                        }
                        
                    </Select>
                </FormControl>
            </div>
            <div className="app__stats">

                <InfoBox title='Coronavirus Cases' cases='123' total={2000}/>
                <InfoBox title='Recovered' cases='123' total={3000}/>
                <InfoBox title='Deaths' cases='123' total={5000}/>
            </div>

            {/* Table */}
            {/* Map */}
        </div>
    )
}


export default App;
