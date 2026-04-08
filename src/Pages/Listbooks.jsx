import React, { useState } from 'react'
import Listed from '../Component/Listed/Listed'
import Wishlist from '../Component/Wishlist/Wishlist'

export default function Listbooks() {
    const [current,setcurrent] = useState("read")
  return (
    <div>
        <div className=' bg-gray-100 text-center font-bold text-xl p-5 md:p-10  m-5'>Books</div>
        
       <div>
         <button onClick={()=>setcurrent("read")}>Read Books</button>
        <button onClick={()=>setcurrent("wish")}>Wishlist Books</button>
       </div>
       {current === "read"?<Listed></Listed>:<Wishlist></Wishlist>}
       
    </div>
  )
}
