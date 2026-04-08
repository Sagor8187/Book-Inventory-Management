import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Mycontext } from '../Context/ListedContext';

export default function BookDetails() {
    const {id} = useParams()

    const {AddToread} = useContext(Mycontext)
    const {AddTowish} = useContext(Mycontext)
    
     const [allbook, setallbook] = useState([]);
    
      useEffect(() => {
        const loaddata = async () => {
          let res = await fetch("/booksData.json");
          let data = await res.json();
          setallbook(data);
        };
        loaddata();
      }, []);

      const specefic = allbook.find(data => data.bookId == id)
      
    
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        
        {/* Left Side: Book Cover Image Area */}
        <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-8">
          <div className="relative shadow-2xl transition-transform duration-300 hover:scale-105">
            <img 
              src={specefic?.image} 
              alt="Book Cover" 
              className="rounded-lg w-full h-auto object-cover border"
            />
          </div>
        </div>

        {/* Right Side: Details Area */}
        <div className="md:w-3/5 p-8 flex flex-col">
          <div className="mb-6">
            <h1 className="text-4xl font-serif font-bold text-gray-800">{specefic?.bookName}</h1>
            <p className="text-gray-500 mt-1 font-medium text-lg">By : {specefic?.author}</p>
          </div>

          <div className="border-t border-b py-2 mb-4">
            <span className="text-gray-600 font-medium">{specefic?.category}</span>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              <span className="font-bold text-gray-800">Review : </span>
              {specefic?.review}
            </p>
          </div>

          <div className="flex gap-3 mb-8">
            <span className="font-bold text-gray-800 self-center mr-2">Tag</span>
            {specefic?.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-green-50 text-green-500 px-4 py-1 rounded-full text-sm font-semibold border border-green-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Table Details */}
          <div className="grid grid-cols-2 gap-y-3 mb-8 text-sm">
            <p className="text-gray-500">Number of Pages:</p>
            <p className="font-bold text-gray-800">{specefic?.totalPages}</p>

            <p className="text-gray-500">Publisher:</p>
            <p className="font-bold text-gray-800">{specefic?.publisher}</p>

            <p className="text-gray-500">Year of Publishing:</p>
            <p className="font-bold text-gray-800">{specefic?.yearOfPublishing}</p>

            <p className="text-gray-500">Rating:{specefic?.rating}</p>
            
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <button onClick={()=>AddToread(specefic)} className="px-8 py-2 border-2 border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors">
              Read
            </button>
            <button onClick={()=> AddTowish(specefic)} className="px-8 py-2 bg-[#5fb5c7] text-white rounded-lg font-bold hover:bg-[#4ea2b3] transition-colors shadow-md">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
