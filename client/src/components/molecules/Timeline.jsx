import React from "react";
import Chart from "react-apexcharts";


const Timeline = (props) => {

    let data = {
        options: {
            chart: {
                id: "timeline",
                toolbar: {
                    show: false
                },
                background: "#252429"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            colors: [ "#821ee5"],
            stroke: {
                width: 7,
                curve: 'smooth'
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
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ],

    };


    return(
        <div className={'tile-container'}>
            <h1>US Cases</h1>
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