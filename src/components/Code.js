import React,{useState, useEffect} from 'react'
const Code = () => {
    const [profile, setProfile] = useState({}); 
    
    const fetchUser = async() => {
        const response = await fetch('https://api.github.com/users/regmiaayush7')
        const result = await response.json()
        setProfile(result)
    }
    useEffect(() => {
        fetchUser()
        console.log(profile);
    },[])
    return (
        <div>
        CODE       
        </div>
    )
}

export default Code
