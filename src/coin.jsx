import React from 'react';
import { useState } from 'react';

const Coin = ({
  name,
  price,
  image,
  priceChange
}) => {
  const [show,setShow] =useState(true)
  return (
    <div className='coin-container flex justify-end
    '>
      <div className='flex flex-row items-center h-20'>
        <div className='coin p-10 items-center flex flex-row '>
          <img  className="h-10 flex flex-row " src={image} alt='crypto' />
          <h1>{name}</h1>
        
        </div>
        <div className='coin-data flex flex-row '>
          <p className='coin-price flex items-center pr-6  '>Price:${price}</p>
          
        
<div className='price-change flex items-center pr-6  '>priceChange:

          {priceChange < 0 ? (
            <p className=' text-red-700'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-green-700'>{priceChange.toFixed(2)}%</p>
          )}
</div>
          <p className='coin-marketcap'>
            {/* Mkt Cap: ${marketcap.toLocaleString()} */}
          </p>
        </div>
      </div>
    </div>
  );
};





//for loop(for Each or 4 loop) at index 10 i++ add hide class
 // set interval function that add one and hides one 
 //needs to limit the  10 total

export default Coin;