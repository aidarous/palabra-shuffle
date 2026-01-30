
import React from 'react'
import { useState, useEffect } from 'react'

const alphabet = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ'.slice(0, 12).split('');

function Grid() {

  const gridSize = 4
  //const gridRow = 4
  const totalLetters = gridSize * gridSize;
  
 
  const [grid, setGrid] = useState([])

  useEffect(()=> {
    const randomGrid = Array.from({ length: totalLetters}, ()=> {
      const randIndex = Math.floor(Math.random()* alphabet.length);
      return alphabet[randIndex];
    });
    setGrid(randomGrid);
  }, [alphabet,totalLetters])


  
 
  return (
    <div className='letter-grid' >
      {grid.map((letter, index)=>(
        <div className='letters' key={index} onClick={()=>{console.log(`${letter}`)}}>
          {letter}
        </div> 
      ))}
    </div>
  )
}

export default Grid
