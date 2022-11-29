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
    <div className='coin-container 
    '>
      <div className='flex flex-row items-center h-10'>
        <div className='coin w-40 items-center flex flex-row p-12  '>
          <img  className="h-6 flex flex-row " src={image} alt='crypto' />
          <h1 className='text-xs'>{name}</h1>
        
        </div>
        <div className='coin-data flex flex-row  text-xs '>
          <p className='coin-price flex items-center w-32 '>Price:${price}</p>
          
        
<div className='price-change flex   '>PriceChange:

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





//for loop(forEach or 4 loop) at index 10, i++ add hide class
 // set interval function that add one and hides one 
 //needs to limit the  10 total

export default Coin;