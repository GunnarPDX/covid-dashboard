import React from 'react'
import ProgressDonut from "./atoms/ProgressDonut";


const TotalPercentages = (props) => {
    let infectedProps = {
        percentage: 70,
        title: 'Global Cases',
        color: 'red'
    };

    let recoveredProps = {
        percentage: 30,
        title: 'Global Recoveries',
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