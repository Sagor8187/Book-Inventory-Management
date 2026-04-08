import React, { useContext } from 'react'
import { Mycontext } from '../Context/ListedContext'

export default function Wishlist() {
    const {wish} = useContext(Mycontext)
   
  return (
   <div>
 
{wish.length == 0?<p className='text-4xl text-center items-center font-bold '>No Books Wishlist</p>: <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto bg-gray-100 p-4 rounded-xl">
        {wish?.map(item =>  <div>
      <div className="flex flex-col md:flex-row gap-6 bg-gray-200 rounded-xl p-6 shadow">

        {/* Left Image */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={item?.image}
            alt="Book"
            className="w-32 h-44 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            {item?.bookName}
          </h1>
          <p className="text-gray-600 mt-1">By : {item?.author}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3 items-center">
            <span className="font-semibold text-gray-700">Tag</span>

            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              #{item?.tags[0]}
            </span>

            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              #{item?.tags[1]}
            </span>

            <span className="text-gray-500 ml-3">
              📍 Year of Publishing: {item?.yearOfPublishing}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-wrap gap-6 mt-3 text-gray-600 text-sm">
            <p>👥 Publisher: {item?.publisher}</p>
            <p>📄 Page {item?.totalPages}</p>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-3 mt-5 items-center">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
              Category: {item?.category}
            </span>

            <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm">
              Rating:{item?.rating}
            </span>

            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-1 rounded-full text-sm font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>)}
    </div>}
   
    </div>
  )
}
