import React from 'react'
import cardimage1 from '../../assets/cardimage1.png';
import cardimage2 from '../../assets/cardimage2.png';
import cardimage3 from '../../assets/cardimage3.png';
import cardimage4 from '../../assets/cardimage4.png';

const Cards = () => {
  return (
    <div className='mx-5'> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
          {[cardimage1, cardimage2, cardimage3, cardimage4].map((image, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img className=" h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" src={image} alt={`Card ${index + 1}`} />
              <h1 className="text-center mt-2 sm:mt-4 text-base sm:text-lg font-semibold">Card Content {index + 1}</h1>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Cards
