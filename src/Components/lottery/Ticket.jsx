import React from 'react'
import TicketNum from './TicketNum'

const Ticket = ({ticket}) => {
  return (
    <div>
      {
        ticket.map((tkt, idx)=>(
            <TicketNum key={idx} num={tkt}/>
        ))
      }
    </div>
  )
}

export default Ticket
