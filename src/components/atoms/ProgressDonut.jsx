import './progress-donut.scss'
import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressDonut = (props) => {

    let colorChoice = () => {
        return (props.color === 'red') ? ' red-donut ' : ' blue-donut ';
    };

    return (
        <div className={''}>

            <h2>{props.title}</h2>

            <svg style={{ height: 0 , width: 0, padding: 0, margin: 0}}>
                <defs>
                    <linearGradient id={'redFillGradient'}>
                        <stop offset="0%" stopColor={'#FB816C'} />
                        <stop offset="50%" stopColor={'#F12D81'} />
                        <stop offset="100%" stopColor={'#821EE5'} />
                    </linearGradient>
                </defs>
            </svg>
            <svg style={{ height: 0, width: 0, padding: 0, margin: 0 }}>
                <defs>
                    <linearGradient id={'blueFillGradient'}>
                        <stop offset="0%" stopColor={'#4dfcbf'} />
                        <stop offset="50%" stopColor={'#0CFCE0'} />
                        <stop offset="100%" stopColor={'#07A3EF'} />
                    </linearGradient>
                </defs>
            </svg>


            <div className={'progress-donut-container' + colorChoice()}>
                <CircularProgressbar
                    value={props.percentage}
                    minValue={0}
                    maxValue={100}
                    text={`${props.percentage}%`}
                    styles={buildStyles({
                        textSize: '16px',
                        textColor: '#F3F4F7',
                        trailColor: '#323137',
                    })}
                />
            </div>

        </div>
    )
};

export default ProgressDonut;