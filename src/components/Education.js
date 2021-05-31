import React from 'react'
import {education} from '../utils/work'
const Education = () => {
    return (
        <div>
            <div className="w3-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>

                    {
                       education.map( edu => {
                           return(
                                <div className="w3-container">
                                <h5 className="w3-opacity"><b>{edu.schoolname}</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{edu.time}</h6>
                                <p>{edu.course}</p>
                                <hr/>
                                </div>
                           )
                       })
                    }
                </div>
        </div>
    )
}

export default Education
