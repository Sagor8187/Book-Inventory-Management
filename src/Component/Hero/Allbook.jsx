import React, { useEffect, useState } from 'react'

export default function Allbook() {

    const [book,setbook]=useState([]);

    useEffect(()=>{
        const loaddata = async ()=>{
            let res = await fetch("/booksData.json");
            let data = await res.json();
            setbook(data)
        }
        loaddata()
    },[])
  return (
    <div>


    </div>
  )
}
