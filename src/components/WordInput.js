import React from 'react'

const WordInput = ({value, onChange, onSubmit, onClear }) => {
  

 

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value.toUpperCase);
        onClear();
      }}>
      <input
        className="border p-2"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or click the letters..."
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WordInput