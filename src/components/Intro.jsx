import React from 'react'
import {aboutme} from '../utils/work'
const Intro = () => {
    return (
        <div>
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-user-circle-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>About Me</h2>
            <div className="w3-container">
                <p>{aboutme.info}</p>
                <hr/>
            </div>
          </div>
        </div>
    )
}

export default Intro
