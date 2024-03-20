import React from 'react'

function handleClick(event){
    console.log(event)
    alert("hiiiiiiii");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
