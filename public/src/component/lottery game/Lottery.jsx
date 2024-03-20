import React, { useState } from 'react'
import "./Lottery.css"
import Ticket from "./Ticket"
import { genTicket } from './helper'



function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket)
    
    let buyTicket = () => {
      setTicket(genTicket(n))
    }

  return (
    <>
    <div className='main-continer'>
      <h3>Lottery Game!</h3>
        <div >
          <Ticket ticket={ticket}/>
          <button onClick={buyTicket}>Buy new ticket</button>
          <h3>{isWinning&& "Congraltulation you Won the Game!"}</h3>
        </div>
    </div>
    </>
  )
}

export default Lottery