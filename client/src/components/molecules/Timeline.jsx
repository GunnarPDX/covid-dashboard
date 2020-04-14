import React, { useState } from 'react'
import Chart from "react-apexcharts";


const Timeline = (props) => {

    const dates = (data) => {
        let arr = [];
        for(let i = 0; i < data.timeline.data.length; i++) {
            arr.push(data.timeline.data[i].date);
        }
        return arr;
    };

    const confirmed = (data) => {
        let arr = [];
        for(let i = 0; i < data.timeline.data.length; i++) {
            arr.push(data.timeline.data[i].confirmed);
        }
        return arr;
    };

    /*
    React.useEffect(() => {
        setDateArr(dates(props));
        setCountArr(confirmed(props));
    }, [props]);
     */

    const [dateArr] = useState(dates(props));
    const [countArr] = useState(confirmed(props));



    let data = {
        options: {
            chart: {
                id: "timeline",

                background: "#252429"
            },
            xaxis: {
                categories: dateArr,
                labels: {
                    show: false
                }
            },
            colors: [ "#e334e5", '#41d2e7'],
            stroke: {
                width: 7,
                curve: 'straight'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#f14a74'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            theme: {
                mode: 'dark'
            }

        },
        series: [
            {
                name: "USA Infected",
                data: countArr
            }
        ],

    };


    return(
        <div className={'tile-container'}>
            <h1>US COVID Timeline</h1>
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
                height="400px"
                color='#F44336'
            />
        </div>
    );
};

export default Timeline;