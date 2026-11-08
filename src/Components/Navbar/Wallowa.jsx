import React from 'react'
import './Wallowa.css'
import wallowa_image from '../../assets/wallowa_image.png'
import joseph_two from '../../assets/Wallowa/joseph_two.png'
import joseph from '../../assets/Wallowa/joseph.png'
import red_trees from '../../assets/Wallowa/red_trees.png'
import wallowa_five from '../../assets/Wallowa/wallowa_five.png'
import wallowa_four from '../../assets/Wallowa/wallowa_four.png'
import wallowa_one from '../../assets/Wallowa/wallowa_one.png'
import wallowa_three from '../../assets/Wallowa/wallowa_three.png'
import wallowa_two from '../../assets/Wallowa/wallowa_two.png'


const Wallowa = () => {
    return (
        <div className="gallery">
            <div>
                <span><img src={wallowa_image} alt="" className='image' /></span>

                <span><img src={joseph_two} alt="" className='image' /></span>

                <span><img src={joseph} alt="" className='image' /></span>

                <span><img src={red_trees} alt="" className='image' /></span>

                <span><img src={wallowa_five} alt="" className='image' /></span>

                <span><img src={wallowa_four} alt="" className='image' /></span>

                <span><img src={wallowa_one} alt="" className='image' /></span>

                <span><img src={wallowa_three} alt="" className='image' /></span>

                <span><img src={wallowa_two} alt="" className='image' /></span>
            </div>
        </div>
    )
}
    


export default Wallowa