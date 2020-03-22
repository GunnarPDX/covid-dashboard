import './footer.scss'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <nav className={'footer'}>

                <div className={'levels'}>
                    <div className={'level-left'}>
                        <a href={'https://github.com/COVID-Dashboard'} target="_blank">
                            <img src={'https://ik.imagekit.io/rsrpyvozp/github_U7QvoXyNQ.svg'} alt={'GitHub opensource link'} className={'github-icon'}/>
                        </a>
                    </div>
                </div>

            </nav>
        </div>
    )
};

export default Footer;