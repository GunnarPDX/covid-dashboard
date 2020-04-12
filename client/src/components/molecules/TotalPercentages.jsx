import React from 'react'
import ProgressDonut from "../atoms/ProgressDonut";


const TotalPercentages = (props) => {
    let death_percentage = Math.round((props.stats.data.deaths / props.stats.data.cases) * 1000) / 10;
    let recovered_percentages = Math.round((props.stats.data.recovered / props.stats.data.cases) * 1000) / 10;

    let infectedProps = {
        percentage: death_percentage,
        title: 'Deaths',
        color: 'red'
    };

    let recoveredProps = {
        percentage: recovered_percentages,
        title: 'Recoveries',
        color: 'blue'
    };

    return (
        <div className={'tile-container'}>
            <div className={'columns'}>
                <div className={'column'}>
                    <ProgressDonut {...infectedProps}/>
                </div>
                <div className={'column'}>
                    <ProgressDonut {...recoveredProps}/>
                </div>
            </div>
        </div>
    )
};

export default TotalPercentages;