import './navigation.scss'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className={'nav-bar'}>

                <div className={'levels'}>
                    <div className={'level-left'}>
                        <img src={'https://ik.imagekit.io/rsrpyvozp/covid_pPyyJ9mlc.svg'} alt={'COVID-19 Dashboard'} className={'nav-logo'}/>
                    </div>
                </div>

            </nav>
            <div className={'nav-spacer'}/>
        </div>
    )
};

export default Navigation;