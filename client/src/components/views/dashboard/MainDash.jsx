import './main-dash.scss'
import React, {Component} from 'react'

import MuuriGrid from 'react-muuri';
import Map from "../../molecules/Map";
import Twitter from "../../molecules/Twitter";
import NewsFeed from "../../molecules/news/NewsFeed";
import TotalPercentages from "../../molecules/TotalPercentages";

class MainDash extends Component {
    constructor () {
        super();
    }

    componentDidMount () {
        this.grid = new MuuriGrid({
            node: this.gridElement,
            defaultOptions: {
                dragEnabled: true
            },
        });

        this.grid.getEvent('dragEnd');
    }

    componentWillUnmount () {
        this.grid.getMethod('destroy');
    }

    render () {
        return (
            <div className={''}>


                <div ref={gridElement => this.gridElement = gridElement} className={'grid'}>
                    <div className="item item-half">
                        <div className="item-content">
                            <Map/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <Twitter/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <NewsFeed/>
                        </div>
                    </div>
                    <div className="item item-half">
                        <div className="item-content">
                            <TotalPercentages/>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default MainDash;