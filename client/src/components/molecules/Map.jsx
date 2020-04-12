import React, { useEffect, useState } from 'react'
//import { csv } from "d3-fetch";
import { scaleLinear, scaleLog } from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const colorScale = scaleLog().domain([1, 2000]).range(["#f87e7d", "#9f0050"]);

const Map = (props) => {

    return (
        <div className={'tile-container'}>
            <h1>Global Heat Map</h1>

            <ComposableMap
                height={400}
                width={800}
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                }}
            >
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />

                {props.countries.data.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const d = props.countries.data.find(s => s.country === geo.properties.NAME || s.country === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d.casesPerOneMillion >= 1 ? d.casesPerOneMillion : 1) : "#73757a"}
                                    />
                                );
                            })
                        }
                    </Geographies>
                )}
            </ComposableMap>
        </div>
    )

};

export default Map;