import React from 'react'
import './Map.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from './utils'
const Map = ({countries, caseType, center, zoom}) => { 
    console.log(caseType)
    return (
        <div className='map'>
            <MapContainer center={center} zoom={zoom}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    showDataOnMap(countries, caseType)
                }
            </MapContainer>
        </div>
    )
}

export default Map   
