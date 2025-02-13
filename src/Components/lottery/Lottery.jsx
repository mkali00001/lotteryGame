import React, { useState } from 'react'
import Ticket from './Ticket'
import {getNewTicket, sum} from './helper'
import './Lottery.css'

const Lottery = ({n=3, winCondition}) => {
    let [ticket, setTicket] = useState(getNewTicket(n))
    let isWin = winCondition(ticket)

    function buyTicket(){
        setTicket(getNewTicket(n))
    }
  return (
    <div>
        <h1>Lottery Game</h1>
        <div className='ticket'>
          <Ticket ticket={ticket} />
        </div>
        <button onClick={buyTicket}>Buy new Ticket</button>
        <h3>{isWin && 'Congrats you won!'}</h3>
    </div>
  )
}

export default Lottery
