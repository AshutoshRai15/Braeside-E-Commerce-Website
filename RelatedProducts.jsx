import React from 'react'
import './RelatedProducts.css'
import related_product from '../Assets/related'
import Item from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Customers Also Viewed</h1>
        <hr />
        <div className="relatedproducts-item">
            {related_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts