import React from 'react'
import {work} from '../utils/work'
const Work = () => {
    return (
      <div>
        <div className="w3-container w3-card w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My Notable Projects</h2>
                {
                    work.map(
                        project => {         
                            return(  
                        <div className="w3-container">
                        <h5 className="w3-opacity"><b>{project.title}</b>/<b><a href={project.link} target="_blank" rel="noreferrer" ><i className="fa fa-hand-o-right fa-fw w3-large w3-text-teal"></i>{project.linkname}</a></b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-code fa-fw w3-margin-right"></i><span className="w3-tag w3-teal w3-round">{project.language}</span></h6>
                        <p>{project.description}</p>
                        <hr/>
                      </div> )  
                        }
                    )
                }
        </div>
      </div>    
    )
}

export default Work
