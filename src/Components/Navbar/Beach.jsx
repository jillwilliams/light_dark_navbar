import React from 'react'
import './Beach.css'
import beach_group from '../../assets/Beach/beach_group.png'
import beach from '../../assets/Beach/beach.png'
import cole_shell from '../../assets/Beach/cole_shell.png'
import group from '../../assets/Beach/group.png'
import manzanita_view from '../../assets/Beach/manzanita_view.png'
import manzanita from '../../assets/Beach/manzanita.png'
import megladon from '../../assets/Beach/megladon.png'
import tillamook from '../../assets/Beach/tillamook.png'


const Beach = () => {
    return (
        <div className='gallery'>
            <div>
                <span><img src={beach_group} alt="beach" className='beach-image' /></span>

                <span><img src={beach} alt="beach" className='beach-image' /></span>

                <span><img src={cole_shell} alt="beach" className='beach-image' /></span>

                <span><img src={group} alt="beach" className='beach-image' /></span>

                <span><img src={manzanita_view} alt="beach" className='beach-image' /></span>

                <span><img src={manzanita} alt="beach" className='beach-image' /></span>

                <span><img src={megladon} alt="beach" className='beach-image' /></span>

                <span><img src={tillamook} alt="beach" className='beach-image' /></span>
            </div>
            
        </div>
    )
}

export default Beach