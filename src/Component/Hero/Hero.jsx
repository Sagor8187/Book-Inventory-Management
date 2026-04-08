import React from 'react'
import herobook from'../../assets/herobook.png'
export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-center shadow m-10 md:m-20 p-8  md:p-15 rounded-lg items-center gap-10'> 
        <div className='space-y-10'>
            <h2 className='font-bold text-3xl md:text-5xl'>Books to freshen up <br /> your bookshelf</h2>
            <button className='btn bg-green-500 text-white font-bold'>View The List</button>
        </div>
        <div>
            <img className='h-60' src={herobook} alt="book image" />
        </div>
    </div>
      
  )
}
