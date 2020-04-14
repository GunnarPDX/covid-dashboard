
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const Twitter = (props) => {
    return (
        <div className={'tile-container'}>
            <h1>#COVID Twitter</h1>
            <TwitterTimelineEmbed 
            sourceType="url" 
            url="https://twitter.com/villatrue/lists/covid19"
            linkColor="red"
            theme="dark" 
            options={{height: 450}}
            noHeader
            noFooter
            transparent
            onLoad={props.callback()}
            />
        </div>
    )
};

export default Twitter;