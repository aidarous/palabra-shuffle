import React from 'react'
import { useState} from 'react'
import Grid from './Grid';
import WordInput from './WordInput';
import Timer from './Timer';

function MainGame() {

    const [grid, setGrid] = useState([useState()]);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const time =  Timer(60); // 60 seconds

  const handleWordSubmit = (word) => {
    if (!foundWords.includes(word)) {
      setFoundWords((prev) => [...prev, word]);
      setScore((prev) => prev + word.length); // simple scoring
    }
}
    return ( 
        <div>
            <h1 className="text-2xl font-bold mb-4">Word Shake Game</h1>
      <p className="text-xl">⏱️ Time left: {time}s</p>
      <Grid grid={grid} />
      <WordInput onSubmit={handleWordSubmit} />
      <div className="mt-4">
        <h2 className="font-semibold">Words Found:</h2>
        <ul>
          {foundWords.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Score: {score}</p>
      </div>
        </div>
     );
}

export default MainGame;