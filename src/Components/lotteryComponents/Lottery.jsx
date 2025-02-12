import React, { useState } from 'react'
import './Lottery.css'
import {getNewTicket, sum} from './helper'
const Lottery = () => {
    let [ticket, setTicket] = useState(getNewTicket(3))
    let isWin = sum(ticket) === 15

    function buyTicket(){
        setTicket(getNewTicket(3))
    }
  return (
    <div>
        <h1>Lottery Game</h1>
        <div className='ticket'>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button onClick={buyTicket}>Buy new Ticket</button>
        <h3>{isWin && 'Congrats you won!'}</h3>
    </div>
  )
}

export default Lottery
