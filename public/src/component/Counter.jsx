import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    // function incCount(){
    //     if (count<=9) {        
    //         setCount(count+1)
    //     }
    // }
    // function decCount(){
    //     if(count>0){
    //         setCount(count-1)
    //     }
    // }
  
  return (
    <>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count)}>-</button>
        <div>Count is = {count}</div>
        <button onClick={() => setCount((count) => count <=9 ? count + 1 : count)}>+</button>
    </>
  )
}

export default Counter