import './footer.scss'
import React from 'react'
import Contributor from "./Contributer";

const Footer = () => {
    var listOfContributors = [
                {
                    name : 'eclark',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'lawleyenda',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Vinay Garimella',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: 'https://github.com/vg5ak',
                    linkedIn : 'https://www.linkedin.com/in/vinay-garimella-489385163/',
                    portfolio : ''
                },
                {
                    name : 'aquaspirit',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Dreams',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Gunnar',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'hup',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'jhercule',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Naah',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Rahul Nair',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Tomato',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'TripleTotoSupreme',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
                {
                    name : 'Villatrue',
                    imgUrl : 'https://bulma.io/images/placeholders/128x128.png',
                    github: '',
                    linkedIn : '',
                    portfolio : ''
                },
            ]
    return (
        <div>
            <nav className={'footer'}>
                <div className={'levels'}>
                    <div className={'level-left'}>
                        <a href={'https://github.com/COVID-Dashboard'} rel="noopener noreferrer" target="_blank" className={'level-item'}>
                            <img src={'https://ik.imagekit.io/rsrpyvozp/github_U7QvoXyNQ.svg'} alt={'GitHub opensource link'} className={'github-icon'}/>
                        </a>
                        {listOfContributors.map(item => {
                            return(
                                <Contributor
                                    name={item.name}
                                    imgUrl={item.imgUrl}
                                    githubLink={item.github}
                                    linkedInLink={item.linkedIn}
                                    portfolioLink={item.portfolio}
                                    />
                            )
                        })}
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Footer;
