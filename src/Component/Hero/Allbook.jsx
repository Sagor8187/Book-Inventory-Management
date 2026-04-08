import React, { useEffect, useState } from "react";

export default function Allbook() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const loaddata = async () => {
      let res = await fetch("/booksData.json");
      let data = await res.json();
      setbook(data);
    };
    loaddata();
  }, []);
  return (
    <div className="my-10 mx-10">
        <h1 className="text-4xl text-center font-bold my-5">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {book.map((item) => (
          <div
            key={item.id}
            className="w-75 mx-auto bg-white rounded-2xl shadow-md p-4"
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
              <img
                src={item.image}
                alt="book"
                className="h-40 object-contain"
              />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
              <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                {item.tags[0]}
              </span>
              <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                {item.tags[1]}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mt-3">{item.bookName}</h2>

            {/* Author */}
            <p className="text-gray-500 text-sm mt-1">{item.author}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{item.category}</span>

              <div className="flex items-center gap-1">
                <span>{item.rating}</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
