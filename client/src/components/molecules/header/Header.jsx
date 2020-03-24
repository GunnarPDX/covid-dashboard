import './header.scss'
import React from 'react'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Header = (props) => {

    let cases = numberWithCommas(props.stats.cases);
    let deaths = numberWithCommas(props.stats.deaths);
    let recovered = numberWithCommas(props.stats.recovered);

    return (
        <div className={'tile-container'}>
            <div className={'level'}>
                <div className={'level-item'}>
                    <h2>Total Global Cases: </h2><span><h1 className={'red-text'}>&nbsp;{cases}</h1></span>
                </div>
                <div className={'level-item'}>
                    <h2>Total Global Deaths: </h2><span><h1 className={'red-text'}>&nbsp;{deaths}</h1></span>
                </div>
                <div className={'level-item'}>
                    <h2>Total Global Recoveries: </h2><span><h1 className={'blue-text'}>&nbsp;{recovered}</h1></span>
                </div>
            </div>
        </div>
    )
};

export default Header;

