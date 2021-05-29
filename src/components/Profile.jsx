import React from 'react'
import {profile,languages, skills} from '../utils/work'
const Profile = () => {
    return (         
        <div>
        <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
            <img src='/image/IMG_9565.jpg' style={{width: '100%'}} alt="Avatar" />
            <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>{profile.name}</h2>
            </div>
            </div>
            <div className="w3-container">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.job}</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.location}</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.email}</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{profile.phone}</p>
            <hr/>

            <p className="w3-large"><b><i className="fa fa-code fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
            {
                languages.map(language => {
                    return(
                        <>
                        <p>{language.title}</p>
                        <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:language.proeficiency}}>{language.proeficiency}</div>
                        </div>
                        </>
                     )
                })
            }  <hr />
            <p className="w3-large w3-text-theme"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Other Skills</b></p>
            {
                skills.map(
                    skill => {
                        return(
                            <>
                                <p>{skill.title}</p>
                                <div className="w3-light-grey w3-round-xlarge">
                                    <div className="w3-round-xlarge w3-teal" style={{height:'24px', width:skill.proeficiency}}></div>
                                </div>
                            </>
                        )
                    }
                )
            }
           
            <br />
            </div>
        </div><br />
      </div>

    )
}

export default Profile
