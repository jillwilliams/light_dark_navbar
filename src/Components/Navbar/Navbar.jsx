import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo_moon.png'
import logo_dark from '../../assets/sun_icon.png'
import search_icon from '../../assets/search_icon_one.png'
import codegeek_icon from '../../assets/codegeek_icon.png'
import { NavLink } from 'react-router-dom'


const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className='navbar'>
            <img src={theme == 'light' ? codegeek_icon : codegeek_icon} alt="logo" className='logo' />
            <h3>Our Family</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home' className='home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/wallowa' className='wallowa'>Wallowa</NavLink>
                    </li>
                    <li>
                        <NavLink to='/beach' className='beach'>Beach</NavLink>
                    </li>
                    <li>
                        <NavLink to='/halloween' className='halloween'>
                        Halloween</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src={theme == 'light' ? search_icon : search_icon} alt="search icon" className='search-icon'/>
            </div>
            <img onClick={() => {toggle_mode()}} src={theme == 'light' ? logo_light : logo_dark} alt="light-dark-img" className='toggle-icon'/>
        </div>
    )
}

export default Navbar