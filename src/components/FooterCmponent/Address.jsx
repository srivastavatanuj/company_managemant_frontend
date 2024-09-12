import React from 'react'
import { IoLocationSharp } from "react-icons/io5";


const Address = () => {
  return (

    <>
      <div className='flex'>
        <div className='font-semibold'>
          <h1>Locate Us</h1>
        </div>
        <div className='text-2xl'>
          <IoLocationSharp />

        </div>
      </div>
      <h2 className="text-sm md:text-base w-28 md:w-full">B-79, B1C, Sector 63, Noida, Uttar Pradesh, India</h2>
    </>
  )
}

export default Address
