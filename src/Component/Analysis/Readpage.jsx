import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
export default function Readpage() {
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
    <div className='m-5'>
      <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={book}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalPages" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}
