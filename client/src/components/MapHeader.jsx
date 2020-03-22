import './header.scss'
import React from 'react'
import CovidMap from "./CovidMap";

const MapHeader = () => {
    return (
        <div className={'tile-container'}>
            <h2>COVID-19 Map</h2>
            <CovidMap/>
            
        </div>
    )
};

export default MapHeader;
