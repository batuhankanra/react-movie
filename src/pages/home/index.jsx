import React from 'react'
import { useState,useEffect } from 'react'


export default function Home() {
  const [api,setApi] =useState(false)


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(filter=>filter.slice(1,4))
    .then(data=>setApi(data))
},[])

  return (
    <div className='container mx-auto'> 
      {api && api.map(item=>(
        <div key={item.id}>
          <img src={item.url} alt={item.id} />
          {item.title}
        </div>
      ))}
      
     </div>
  )
}
