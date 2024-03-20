import React from 'react'
import Ticketnum from './Ticketnum'
import "./Lottery.css"

export default function Ticket({ticket}) {
  return (
    <>
    <div className='ticket'>
      <p>Ticket</p>
      {ticket.map((num, idx)=>(
        <Ticketnum num={num} key={idx} />
      ))}
    </div>
  </>
  );
}