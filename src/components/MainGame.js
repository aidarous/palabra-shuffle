import React from 'react'
import { useState} from 'react'
import Grid from './Grid';
import WordInput from './WordInput';
import Timer from './Timer';

  const generateGrid = () =>{
    const alphabet = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ'.slice(0, 12).split('');
    return Array.from({ length: 16 }, () =>
    alphabet[Math.floor(Math.random() * alphabet.length)]
  );
  }

function MainGame() {

  
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const time =  Timer(60); // 60 seconds
  const [currentWord, setCurrentWord] = useState('');



  const [grid, setGrid] = useState(generateGrid);

  const handleWordSubmit = (word) => {
    if (!foundWords.includes(word)) {
      setFoundWords((prev) => [...prev, word]);
      setScore((prev) => prev + word.length); // simple scoring
    }
    setCurrentWord('')
}
    return (  
        <div>
            <h1 className="text-2xl font-bold mb-4">Palabra Shuffle</h1>
      <p className="text-xl">⏱️ Time left: {time}</p>
      <Grid grid={grid} 
      onLetterClick={(letter) =>
    setCurrentWord((prev) => prev + letter)
  }
      />
      <WordInput
      value={currentWord}
      onSubmit={handleWordSubmit}
      onClear={() => setCurrentWord('')}
      />
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