import React from 'react';
import img from '../../assets/AboutUsHeroBgImg.png';
import Middlepart from './Middlepart';
import Text from './Text'

const AboutUs = () => {
    return (
        <div className='min-h-screen'>
            <div className='w-full h-96 relative'>
                <img className='w-full h-full object-cover' 
                     src={img} alt="Background" />
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
                    About Us
                </h1>
            </div>
            <Middlepart />
            <Text />
        </div>
    );
}

export default AboutUs;
