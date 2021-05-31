import React,{ useContext } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.styles.css';
import { ThemeStore } from './ThemeContext'

const Navigation = () => {
    const [theme, setTheme] = useContext(ThemeStore)

    return (
        <>
        <div className="navigation">
            <Link to='/'><i className="fa fa-home fa-2x"><p>Home</p></i></Link>
            <Link to='/projects'><i className="fa fa-briefcase fa-2x"><p>Other Projects</p></i></Link>  
            <Link to= '/code'><i className="fa fa-github fa-2x"><p>Github</p></i></Link>    
        </div>
        <div className="theme" onClick={() => setTheme(prev => !prev)}>
            {theme ? <i className="fa fa-sun-o  w3-large"><p>Light Mode</p></i> : <i className="fa fa-moon-o  w3-large"><p>Dark Mode</p></i>}
        </div>
        </>
    )
}

export default Navigation
