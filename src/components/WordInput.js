import React from 'react'

const WordInput = ({value, onSubmit, onClear }) => {
  

 

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
        onClear();
      }}>
      <input
        className="border p-2"
        type="text"
        value={value}
        
        placeholder="Type a word..."
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WordInput