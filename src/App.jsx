import React from 'react'
import './App.css'
import Lottery from './Components/lottery/Lottery'
import { sum } from './Components/lottery/helper'

const App = () => {
  let winCondition = (ticket)=>{
    return sum(ticket) === 15
  }
  return (
    <div>
      <Lottery n={4} winCondition={winCondition}/>
    </div>
  )
}

export default App
