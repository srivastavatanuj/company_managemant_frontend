import React from 'react'
import img1 from '../../assets/AboutUsimg1.png';
import img2 from '../../assets/AboutUsimg2.png';

const Middlepart = () => {
  return (
    <div className='m-20'>
        <div className='flex flex-col md:flex-row gap-4 mt-4'>
                <img className='rounded-lg  w-full md:w-1/2 object-cover' src={img1} alt="Image 1" />
                <img className='rounded-lg  w-full md:w-1/2 object-cover' src={img2} alt="Image 2" />
            </div>
    </div>
  )
}

export default Middlepart
