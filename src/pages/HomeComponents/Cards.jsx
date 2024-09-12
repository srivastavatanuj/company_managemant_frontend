import React from 'react';
import cardimage1 from '../../assets/cardimage1.png';
import cardimage2 from '../../assets/cardimage2.png';
import cardimage3 from '../../assets/cardimage3.png';
import cardimage4 from '../../assets/cardimage4.png';

const Cards = () => {
  return (
    <div className='mx-4 sm:mx-10 md:mx-20 lg:mx-40 mt-6 sm:mt-14 '>
      <div className='flex flex-wrap justify-center md:justify-between gap-4'>
        <div className='border-2 border-red-200 rounded-xl w-full sm:w-56 p-4 flex flex-col items-center'>
          <img className='h-24 w-24' src={cardimage1} alt="cardimage1" />
          <h1 className='text-center mt-4'>Increase employee data visibility across regions</h1>
        </div>
        <div className='border-2 border-red-200 rounded-xl w-full sm:w-56 p-4 flex flex-col items-center'>
          <img className='h-24 w-24' src={cardimage2} alt="cardimage2" />
          <h1 className='text-center mt-4'>Guarantee secure data management and employee privacy</h1>
        </div>
        <div className='border-2 border-red-200 rounded-xl w-full sm:w-56 p-4 flex flex-col items-center'>
          <img className='h-24 w-24' src={cardimage3} alt="cardimage3" />
          <h1 className='text-center mt-4'>Customize and manage your workforce in your preferred way</h1>
        </div>
        <div className='border-2 border-red-200 rounded-xl w-full sm:w-56 p-4 flex flex-col items-center'>
          <img className='h-24 w-24' src={cardimage4} alt="cardimage4" />
          <h1 className='text-center mt-4'>Empower your employees with self-service portals</h1>
        </div>
      </div>
    </div>
  )
}

export default Cards;
