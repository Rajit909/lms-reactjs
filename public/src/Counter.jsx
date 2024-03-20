import React,{useState, useEffect} from 'react'

export default function Counter() {
    let [countx, setCountx] = useState(0)
    let [county, setCounty] = useState(0)
    let incCountx = () => {
        setCountx((currCount) => currCount+1)
    }

    let incCounty = () => {
        setCounty((curCount) => curCount+1)
    }

    // let resetCount = () => {
    //     setCountx(countx === "0")
    // }

    useEffect(function prinSome(){
        console.log("something else")
    
    }, [])
    
    
  return (
    <>
        <div>
            <span>Countx = {countx}</span><br /><br />
            <button onClick={incCountx}>+</button><br /><br />
            <span>County = {county}</span><br /><br />
            <button onClick={incCounty}>+</button><br />
            {/* <button onClick={resetCount}>Reset</button> */}
        </div>
    </>
  )
}
