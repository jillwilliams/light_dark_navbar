import React from 'react'
import './Halloween.css'
import daniel_kids from'../../assets/Halloween/daniel_kids.png'
import daniel_cassie from'../../assets/Halloween/daniel_cassie.png' 
import halloween_costumes from'../../assets/Halloween/halloween_costumes.png'
import kids_halloween from'../../assets/Halloween/kids_halloween.png'
import kirths from'../../assets/Halloween/kirths.png'
import madalyn_horse from'../../assets/Halloween/madalyn_horse.png'
import madalyn_two from'../../assets/Halloween/madalyn_two.png'
import swensons from'../../assets/Halloween/swensons.png'

const Halloween = () => {
    return (
        <div className='gallery'>
            <div>
                <span><img src={daniel_kids} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={daniel_cassie} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={halloween_costumes} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={kids_halloween} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={kirths} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={madalyn_horse} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={madalyn_two} alt='halloween-image' className='halloween-image' /></span>

                <span><img src={swensons} alt='halloween-image' className='halloween-image' /></span>

            </div>
        </div>
    )
}

export default Halloween