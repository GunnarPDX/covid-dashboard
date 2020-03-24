import './main-dash.scss'
import React, {Component} from 'react'

import MuuriGrid from 'react-muuri';
import Map from "../../molecules/Map";
import Twitter from "../../molecules/Twitter";
import NewsFeed from "../../molecules/news/NewsFeed";
import TotalPercentages from "../../molecules/TotalPercentages";
import Header from "../../molecules/header/Header";

import testProps from "../../Props";

class MainDash extends Component {
    constructor () {
        super();
    }

    componentDidMount () {
        this.grid = new MuuriGrid({
            node: this.gridElement,
            defaultOptions: {
                dragEnabled: false
            },
        });

        this.grid.getEvent('dragEnd');


        // This refreshes the grid to override 'height: auto' with the elements actual heights
        // Super janky but works for now.
        // To fix this the grid-methods need to be passed into the iframe's onLoad prop as a callback
        setTimeout(() => {
            this.grid.getMethod('refreshItems');
            this.grid.getMethod('layout');
        }, 100);
        setTimeout(() => {
            this.grid.getMethod('refreshItems');
            this.grid.getMethod('layout');
        }, 200);
        setTimeout(() => {
            this.grid.getMethod('refreshItems');
            this.grid.getMethod('layout');
        }, 400);
        setTimeout(() => {
            this.grid.getMethod('refreshItems');
            this.grid.getMethod('layout');
        }, 600);
        setTimeout(() => {
            this.grid.getMethod('refreshItems');
            this.grid.getMethod('layout');
        }, 1000);

    }

    componentWillUnmount () {
        this.grid.getMethod('destroy');
    }

    render () {
        let props = testProps;

        return (
            <div className={''}>


                <div ref={gridElement => this.gridElement = gridElement} className={'grid'}>
                    <div className="item item-full">
                        <div className="item-content">
                            <Header {...props}/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <Map {...props}/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <TotalPercentages {...props}/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <Twitter/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <NewsFeed {...props}/>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default MainDash;