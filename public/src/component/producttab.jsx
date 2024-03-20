import React from 'react'
import Product from './product'

const Producttab = () => {
  
  return (
    <>
    <div className='container'>
      <h4>Blockbuster deals | shop now</h4>
      <div className='main'>
        <Product title="Product" idx={0}/>
        <Product title="Product" idx={1}/>
        <Product title="Product" idx={2}/>
        <Product title="Product" idx={3}/>
      </div>
    </div>
    </>
  )
}

export default Producttab
