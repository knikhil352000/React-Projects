import React, { useState, useEffect } from 'react'
import { FormControl, MenuItem, Select, Card, CardContent, Button } from '@material-ui/core'
import './App.css'
import Table from './Table'
import InfoBox from './InfoBox'
import Map from './Map'
import {prettyPrintStat, sortData} from './utils'
import LineGraph from './LineGraph'
import 'leaflet/dist/leaflet.css'
const App = () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([])
    const [mapCenter, setMapCenter] = useState({lat: 17.80746, lng: -88.4796})
    const [mapZoom, setMapZoom] = useState(4)
    const [mapCountries, setMapCountries] = useState([])
    const [caseType, setCaseType] = useState("cases")
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => { 
            setCountryInfo(data);
        })
    }, [caseType])
    
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
                    const sortedData = sortData(data);
                    setTableData(sortedData)
                    setCountries(countries);
                    setMapCountries(data);
                });
            };
            getCountriesData();
        }, [])
    const onCounrtyChange = async(e) => {
        const countryCode = e.target.value;
        const url = countryCode === 'worldwide' 
            ? 'https://disease.sh/v3/covid-19/all' 
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`
            await fetch(url) 
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);
                setCountry(countryCode);
                setMapCenter([data.countryInfo.lat,data.countryInfo.long]) 
                setMapZoom(7);
                    
            })
    }
        return (
        <div className="fullapp">
            <div className="app">
                <div className="app__left">
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
                        <InfoBox isRed active={caseType === 'cases'} onClick={(e) => setCaseType("cases")} title='Coronavirus Cases' cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
                        <InfoBox active={caseType === 'recovered'} onClick={(e) => setCaseType("recovered")} title='Recovered' cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>
                        <InfoBox isRed active={caseType === 'deaths'} onClick={(e) => setCaseType("deaths")} title='Deaths' cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
                    </div>
                    <Map caseType={caseType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
                </div>
                <Card className='app__right'>
                    <CardContent>
                        <h3>Live Cases by Country</h3>
                        <Table countries={tableData}/>
                        <h3 className='app__graphTitle'>Worldwide new {caseType}</h3>
                        <LineGraph caseType={caseType}/>
                    </CardContent>
                </Card>
            </div>
            <div className="app__bottom">
                    <h2>Get The Code</h2>
                    <Button onClick={() => window.location.href= 'https://github.com/knikhil352000/React-Projects/tree/master/Covid-Tracker'} style={{backgroundColor: '#0390fc', margin: '10px'}}>Click Here</Button>
            </div>
        </div>
    )
}


export default App;
