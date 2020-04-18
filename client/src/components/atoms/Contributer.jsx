import React from 'react'

const Contributor = (props) => {

    return (
        <div className={"level-item has-text-centered"} id="#1">
            <div>
                <p className={"heading"}>{props.name}</p>
                <div className="dropdown is-hoverable is-up">
                    <div className="dropdown-trigger">
                        <figure className={"image is-32x32"}>
                            <img className={"is-rounded"} src={props.imgUrl} alt={'contributor avatar'}/>
                        </figure>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <p><a href={'https://www.github.com'} target="_blank">Github</a></p>
                                <p><a href={'https://www.linkedin.com'} target="_blank">LinkedIn</a></p>
                                <p><a href={''} target="_blank">Portfolio</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contributor;