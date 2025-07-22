import React from 'react'

const WordInput = ({ onSubmit }) => {
  const [word, setWord] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(word.toUpperCase());
    setWord('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border p-2"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Type a word..."
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WordInput