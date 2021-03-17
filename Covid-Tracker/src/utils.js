import { Circle, Popup } from "react-leaflet";
import React from 'react'
import numeral from "numeral";

const caseTypeColors = {
    cases: {
        hex: '#cc1034',
        rgb: 'rgb(204, 16, 52)',
        half_op: 'rgba(204, 16, 52, 0.3)',
        multiplier: 200
    },
    recovered: {
        hex: '#7dd71d',
        rgb: 'rgb(215,215,29,0.5)',
        half_op: 'rgba(215,215,29,0.3)',
        multiplier: 1200
    },
    deaths: {
        hex: '#fb4443',
        rgb: 'rgb(251,68,67)',
        half_op: 'rgba(251,68,67,0.5)',
        multiplier: 2000
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
export const showDataOnMap = (data, caseType='cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={caseTypeColors[caseType].hex}
            fillColor={caseTypeColors[caseType].hex}
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