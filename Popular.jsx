import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Items'

const Popular = () => {
  
  const [new_collection,setNew_collection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='popular'>
        <h1>NEW AND TRENDING</h1>
        <hr />
        <div className="popular-item">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular