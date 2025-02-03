import './css/Header.css'
import icon from './images/3d-render-movie-maker-3d-illustration-design_460848-9858-removebg.png'
import profile_icon from './images/PNG Profile User Round Gray Icon Symbol - 1000x1000.png'
import { useState } from 'react'
import Categorie from './Categories.jsx'
import {Link} from 'react-router-dom'
import Auth from './Auth.jsx'

export default function Header(){
    const [Categories, setCategories] = useState(false);
    const [Profile, setProfile] = useState(false);

    let handleMouseEnter = function(){
        setCategories(true)
    }

    let handleMouseLeave = function(){
        setCategories(false)
    }

    let handleIconClick = function(){
        setProfile(true)
    }

    let handleClose = function(data){
        setProfile(data)
    }

    return (
        <div className="header" id='header'>
            <img src={icon} className='icon' alt="none" />
            <p className='topic'>Absolute Cinema</p>
            <Link className='group' to="/films">Top 100 Films</Link>
            <Link className='group' to="/serials">Top 100 Series</Link>
            
            <div className='categories-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a className='group' onClick={(event)=>{event.preventDefault()}} href="">Categories</a>
                {Categories&&<Categorie/>}
            </div>
            <div className='profile-container'>
                <img src={profile_icon} onClick={handleIconClick} className='profile_icon' alt="none" />
                {Profile&&<Auth onClose={handleClose}/>}
                </div>
        </div>
    
    )
}