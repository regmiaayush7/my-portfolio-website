import React from 'react'
import Footer from './Footer'
import Intro from './Intro'
import Profile from './Profile'
import Work from './Work'
import Education from './Education'
const Home = () => {
    return (
        <div>   
        <div className ="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
            <div className="w3-row-padding">
                <div className= "w3-third">
                <Profile />
                </div>
                <div className="w3-twothird">
                    <Intro />
                    <Work />
                    <Education />
                </div>
             </div>        
         </div>
        <Footer />                 
        </div>
    )
}

export default Home
