import React from 'react'
import { useState, useEffect } from 'react'



const Timer = ({count}) => {
    

  const minutes = Math.floor(count / 60);
  const seconds = count% 60;
  const formattedTime= `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return (
    <div>
      <h2>{formattedTime}</h2>
    </div>
  )
}

export default Timer
