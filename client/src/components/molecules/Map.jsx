import React, { useEffect, useState } from 'react'
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear().domain([0.29, 0.68]).range(["#ffa62b", "#ff5233"]);



const Map = (props) => {

    props.countries.map(location => {
        console.log(location);
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        csv(`/vulnerability.csv`).then(data => {
            setData(data);
        });
    }, []);


    return (
        <div className={'tile-container'}>
            <h1>Global Map</h1>

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

                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d["2017"]) : "#73757a"}
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