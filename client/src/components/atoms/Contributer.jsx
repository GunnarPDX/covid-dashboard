import React from 'react'

const Contributor = (props) => {

    /*
        Required props are: name and imgUrl
        Non-Required (haven't been added yet): github, linkedIn, and Portfolio
    */

    /* TODO: make conditional render function for non-required props + call the functions in the main return block */
    const renderGithubLink = () => {
        if(props.githubLink){
            return (
                <p><a href={props.githubLink} target="_blank">Github</a></p>
            )
        } else return null;
    };
    const renderLinkedInLink = () => {
        if(props.linkedInLink){
            return (
                <p><a href={props.linkeInLink} target="_blank">LinkedIn</a></p>
            )
        }
    }
    const renderPortfolioLink = () => {
        if(props.portfolioLink) {
            return (
                <p><a href={props.portfolioLink} target="_blank">Portfolio</a></p>
            )
        }
    }
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
                                {renderGithubLink()}
                                {renderLinkedInLink()}
                                {renderPortfolioLink()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contributor;
