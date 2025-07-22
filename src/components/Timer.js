import React from 'react'
import { useState, useEffect } from 'react'



const Timer = () => {
    const [count, setCount] = useState(180);

    useEffect(()=> {
      if (count === 0){
        return
      }

   const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [count])

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
