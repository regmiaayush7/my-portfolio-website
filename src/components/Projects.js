import React, {useState} from 'react'
import {projects} from '../utils/work'

const Projects = () => {
    const[search, setSearch] = useState('');
    const filtered = projects.filter(project => {
        return(
            project.title.toLowerCase().includes(search.toLowerCase())
        )
    })
    return (
        <div>
        <div className="w3-container w3-card w3-margin">
        <label for="search" style={{marginRight: '10px'}}><i class="fa fa-search"></i></label>
            <input type= 'text' style={{marginTop: '15px'}} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value) }/>
               
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My Other Projects</h2>
                {
                    filtered.map(
                        project => {         
                            return(  
                        <div className="w3-container w3-margin">
                        <h5 className="w3-opacity"><b>{project.title}</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-code fa-fw w3-margin-right"></i><span className="w3-tag w3-teal w3-round">{project.tech}</span></h6>
                        <p>{project.description}</p>
                        <hr/>
                      </div> )  
                        }
                    )
                }
                <div className="w3-text-teal w3-container w3-margin"><a href="https://github.com/regmiaayush7" target="_blank" rel="noreferrer">Please Click Here And Visit My Github Account To Find These Projects</a></div>
        </div>
      </div> 
    )
}

export default Projects
