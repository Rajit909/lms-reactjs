import React from 'react'

export default function Price({oldPrice, newPrice}) {
  let bgc = {
    backgroundColor: "yellow",
    height: "40px",
    borderRadius: "0px 0px 15px 15px"

  }


  return (
   <>
   <div className='price-main' style={bgc}>
        <strike>{oldPrice}</strike>
        &nbsp;&nbsp;&nbsp;
        <span>{newPrice}</span>
   </div>
   </>
  )
}
