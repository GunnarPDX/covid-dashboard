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
        data: null,
        loading: true
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

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500);

    }

    renderHeader = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<Header {...props}/>)
        }
    };

    renderMap = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<Map {...props}/>)
        }
    };

    renderTotalPercentages = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<TotalPercentages {...props}/>)
        }
    };

    renderTimeline = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<Timeline {...props}/>)
        }
    };

    renderNewsFeed = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<NewsFeed {...props}/>)
        }
    };

    renderCountryTable = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<CountryTable {...props}/>)
        }
    };

    renderFinance = () => {
        let props = this.state.data;
        if(this.state.data === null){
            return null;
        } else {
            return(<FinancialCharts {...props}/>)
        }
    };

    render () {

        return (
            <div className={'content-container'}>

                <div className={`loading-screen ${this.state.loading ? '' : 'hidden'}`}>
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

                {this.renderHeader()}

                <div className="columns is-gapless">
                    <div className="column item-half">
                        {this.renderMap()}
                        {this.renderFinance()}
                        {this.renderNewsFeed()}
                    </div>
                    <div className="column item-half">
                        {this.renderTotalPercentages()}
                        {this.renderTimeline()}
                        {this.renderCountryTable()}
                        <Twitter/>
                    </div>
                </div>

            </div>
        );
    }
}

export default MainDash;