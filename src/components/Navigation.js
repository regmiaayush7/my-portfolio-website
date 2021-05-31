import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.styles.css';
const Navigation = () => {
    return (
        <div className="navigation">
            <Link to='/'><i className="fa fa-home fa-2x"><p>Home</p></i></Link>
            <Link to='/projects'><i className="fa fa-briefcase fa-2x"><p>Other Projects</p></i></Link>  
            <Link to= '/code'><i className="fa fa-github fa-2x"><p>Github</p></i></Link>    
        </div>
    )
}

export default Navigation
