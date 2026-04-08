import React, { useState } from 'react'
import { createContext } from 'react'

export const Mycontext = createContext()

export default function ListedContext({children}) {
    const [read,setread] =useState([])

    const [wish,setwish]= useState([])

    const AddToread = (data)=>{
        const exist = read.find(item =>item.bookId ==data.bookId)

        if(exist){
            alert(`${exist} is already added`)
        }else{
            setread([...read,data])
        }
    }

     const AddTowish = (data)=>{
        const exist = wish.find(item =>item.bookId ==data.bookId)

        if(exist){
            alert(`${"book"} is already added`)
        }else{
            setwish([...wish,data])
        }
    }
  return (
    <Mycontext.Provider value={{read,setread,AddToread,AddTowish,wish}}>
        {children}
    </Mycontext.Provider>
  )
}
 