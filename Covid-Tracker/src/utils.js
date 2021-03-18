import React from 'react'
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const caseTypeColors = {
    cases: {
        hex: '#cc1034',
        multiplier: 200
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 200
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 400
    },
}
export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
        if(a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;
}
//Circle on Map
export const showDataOnMap = (data, caseType="cases") => {
    console.log(caseType);
    return (
        data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={caseTypeColors[caseType].hex}
                fillColor={caseTypeColors[caseType].hex}
                fillOpacity={0.4}
                radius={
                    Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier
                }
            >
                <Popup >
                    <div className='info-container'>
                        <div className='info-flag' style={{backgroundImage: `url(${country.countryInfo.flag})`}}></div>
                        <div className='info-name'>{country.country}</div>
                        <div className='info-confirmed'>Cases: {numeral(country.cases).format('0.0')}</div>
                        <div className='info-recovered'>Recovered: {numeral(country.recovered).format('0.0')}</div>
                        <div className='info-deaths'>Deaths: {numeral(country.deaths).format('0.0')}</div>
                    </div>
                </Popup>
            </Circle>
        ))
    )
} 
    

export const prettyPrintStat = stat => (
    stat ? `+${numeral(stat).format('0.0a')}`: "+0"
)