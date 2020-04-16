import './main-dash.scss'


import React, {Component} from 'react'

import Map from "../../molecules/Map";
import Twitter from "../../molecules/Twitter";
import NewsFeed from "../../molecules/news/NewsFeed";
import TotalPercentages from "../../molecules/TotalPercentages";
import Header from "../../molecules/header/Header";
import CountryTable from "../../molecules/table/CountryTable";

//import testProps from "../../Props";
import Timeline from "../../molecules/Timeline";
import FinancialCharts from "../../molecules/Finance";

class MainDash extends Component {
    state = {
        data: null
    };

    componentDidMount () {
        fetch('https://damp-ravine-23091.herokuapp.com/')
            .then(resp => resp.json())
            .then(resp => {
                //console.log(resp);
                resp.stats.data = JSON.parse(resp.stats.data);
                resp.news.data = JSON.parse(resp.news.data);
                resp.assets.spy1m = JSON.parse(resp.assets.spy1m);
                resp.assets.btc1m = JSON.parse(resp.assets.btc1m);
                resp.countries.data = JSON.parse(resp.countries.data);
                resp.timeline.data = JSON.parse(resp.timeline.data);
                //console.log(resp);
                this.setState({
                    data: resp
                })
            });

    }

    render () {
        let props = this.state.data;
        if(this.state.data === null){
            return (
                <div className={`loading-screen`}>
                    <div className={'loading-contents'}>
                        <div className="DNA_cont">
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                            <div className="nucleobase"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Header {...props}/>
                    <div className="columns is-gapless">
                        <div className="column item-half">
                            <Map {...props}/>
                            <FinancialCharts {...props}/>
                            <NewsFeed {...props}/>
                        </div>
                        <div className="column item-half">
                            <TotalPercentages {...props}/>
                            <Timeline {...props}/>
                            <CountryTable {...props}/>
                            <Twitter/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MainDash;