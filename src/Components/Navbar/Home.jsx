import React from 'react'
import './Home.css'
import daniel_ashley from '../../assets/Home/daniel_ashley.png'
import door from '../../assets/Home/door.png'
import gracie_car from '../../assets/Home/gracie_car.png'

import matthew_car from '../../assets/Home/matthew_car.png'
import matthew_studying from '../../assets/Home/matthew_studying.png'



const Home = () => {
    return (
        <div className="gallery">
            <div>
                <span><img src={daniel_ashley} alt="" className='imageOne' /></span>

                <span><img src={door} alt="" className='door' /></span>

                <span><img src={gracie_car} alt="" className='imageTwo' /></span>

                <span><img src={matthew_car} alt="" className='imageThree' /></span>

                <span><img src={matthew_studying} alt="" className='imageFour' /></span>

            </div>
        </div>
    )
}

export default Home