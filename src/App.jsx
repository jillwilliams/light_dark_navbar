import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/Home'
import Wallowa from './Components/Navbar/Wallowa'
import Beach from './Components/Navbar/Beach'
import Halloween from './Components/Navbar/Halloween'
import { Routes, Route } from 'react-router-dom';


const App = () => {

    const current_theme = localStorage.getItem('current_theme');
    
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    useEffect(() => {
        localStorage.setItem('current_theme', theme)
    }, [theme])

    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/wallowa' element={<Wallowa />} />
                <Route path='/beach' element={<Beach />} />
                <Route path='/halloween' element={<Halloween />} />
            </Routes>
        </div>
    );
}

export default App;
