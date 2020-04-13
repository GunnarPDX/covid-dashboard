import React, {useState} from 'react'
import Chart from "react-apexcharts";

const FinancialCharts = (props) => {

/*
    const spyPrices = (data) => {
        let arr = [];
        let spy = data.assets.spy1m['Time Series (Daily)'];

        for (let key in spy) {
            if (spy.hasOwnProperty(key)) {
                //console.log(spy[key]);
                let datapoint = {
                    x: key,
                    y: [spy[key].open, spy[key].high, spy[key].low, spy[key].close]
                };
                arr.push(data.assets.btc1m);
            }
        }
        return arr;
    };

    /*
    const btcPrices = (data) => {
        let arr = [];
        for(let i = 0; i < data.assets.btc1m.length; i++) {
            let datapoint = {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            };

            arr.push(data.assets.btc1m);
        }
        return arr;
    };

    React.useEffect(() => {
        setSpyArr(spyPrices(props));
        //setBtcArr(btcPrices(props));
    }, [props]);


    const [spyArr, setSpyArr] = useState(spyPrices(props));
    //const [btcArr, setBtcArr] = useState(btcPrices(props));

*/

    let spy = props.assets.spy1m['Time Series (Daily)'];
    let arr = [];

    for (let key in spy) {
        if (spy.hasOwnProperty(key)) {
            //console.log(spy[key]);
            let datapoint = {
                x: key,
                y: [
                    Number.parseFloat(spy[key]['1. open']),
                    Number.parseFloat(spy[key]['2. high']),
                    Number.parseFloat(spy[key]['3. low']),
                    Number.parseFloat(spy[key]['4. close'])
                ]
            };
            arr.push(datapoint);
        }
    }

    console.log(arr);

    let data = {
        series: [{
            data: arr
        }],
        options: {
            chart: {
                type: 'candlestick',
                background: "#252429",
                height: 350
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#40fcb1',
                        downward: '#f12d81'
                    }
                }
            },
            title: {
                text: 'S&P 500',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            },
            theme: {
                mode: 'dark'
            }
        },

    };

    return(
        <div className={'tile-container'}>
            <div id="chart-line">
                <Chart options={data.options} series={data.series} type="candlestick" height={250} />
            </div>
            <div id="chart-line2">
                <Chart options={data.options} series={data.series} type="candlestick" height={250} />
            </div>
        </div>
    );
};

export default FinancialCharts;