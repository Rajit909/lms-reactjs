import React from 'react'
import { useState } from 'react'

function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    // let [arr, setArr] = useState(["no moves"])

    function updateBlue(){
      setMoves((prevMoves) => {
        return {...prevMoves, blue: prevMoves.blue + 1}
      })
      
      // array with state
      // setArr((prevArr)=>{
      //   return [...prevArr, "blue moves"]
      // })
    }
    function updateYellow(){
      setMoves((prevMoves) => {
        return {...prevMoves, yellow: prevMoves.yellow + 1}
      })
    }
    function updateGreen(){
      setMoves((prevMoves) => {
        return {...prevMoves, green: prevMoves.green + 1}
      })
    }
    function updateRed(){
      setMoves((prevMoves) => {
        return {...prevMoves, red: prevMoves.red + 1}
      })
    }

  
  return (
    <>
        <h4>Game Begins!</h4>
        {/* <p>{arr}</p> */}
        <div className="board">
            <p>Blue moves ={moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves ={moves.yellow} </p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            <p>Green moves ={moves.green} </p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red moves ={moves.red} </p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
        </div>

    </>
  )
}

export default LudoBoard