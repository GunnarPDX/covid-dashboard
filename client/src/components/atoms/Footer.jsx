import './footer.scss'
import React from 'react'
import Contributor from "./Contributer";

const Footer = () => {
    return (
        <div>
            <nav className={'footer'}>
                <div className={'levels'}>
                    <div className={'level-left'}>

                        <a href={'https://github.com/COVID-Dashboard'} rel="noopener noreferrer" target="_blank" className={'level-item'}>
                            <img src={'https://ik.imagekit.io/rsrpyvozp/github_U7QvoXyNQ.svg'} alt={'GitHub opensource link'} className={'github-icon'}/>
                        </a>



                        <Contributor
                            name={'eclark'}
                            imgUrl={'https://bulma.io/images/placeholders/128x128.png'}
                            /* TODO: add more props here for remaining links and stuff */
                        />







                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Footer;
