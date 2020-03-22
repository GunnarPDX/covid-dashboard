
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const Twitter = () => {
    return (
        <div className={'tile-container'}>            
            <TwitterTimelineEmbed 
            sourceType="url" 
            url="https://twitter.com/villatrue/lists/covid19"
            theme="dark" 
            options={{height: 400}} />
        </div>
    )
};

export default Twitter;