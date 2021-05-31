import React,{useState, useEffect} from 'react'
import './code.css'

const Code = () => {
    const [profile, setProfile] = useState({}); 

    const fetchUser = async() => {
        const response = await fetch('https://api.github.com/users/regmiaayush7')
        const result = await response.json()
        setProfile(result)
    }
    useEffect(() => {
        fetchUser()
    },[])
    return (
        <div className="profile-git">
            <div className="card">
            <img src={profile.avatar_url} alt="Avatar" style={{width:'100%'}} />
            <div className="container">
                <h4><b>{profile.name}</b></h4>
                <p>{profile.bio}</p><br/> 
                <p>Number of Repositories on Github: {profile.public_repos}</p>
                <p>Started At: {profile.created_at}</p>
                <p>Twitter Account: {profile.twitter_username}</p> 
                <p>My Location: {profile.location}</p> <br/> 
            </div>
            </div>
        </div>
    )
}

export default Code
