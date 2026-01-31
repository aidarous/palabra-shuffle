
import React from 'react'
// import { useState, useEffect } from 'react'



function Grid({ grid, onLetterClick }) {

  const gridSize = 4
  //const gridRow = 4
  const totalLetters = gridSize * gridSize;
  
 
 

  
 
  return (
    <div className='letter-grid' >
      {grid.map((letter, index)=>(
        <div className='letters' key={index} onClick={() => {
          console.log(letter)
          onLetterClick(letter)}}>
          {letter}
        </div> 
      ))}
    </div>
  )
}

export default Grid
