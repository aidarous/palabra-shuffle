import React from 'react'

const WordInput = ({value, onChange, onSubmit, onClear, count }) => {
  

 

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value.toUpperCase());
        onClear();
      }}>
      <input
        className="border p-2"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={count <=0}
        placeholder="Type or click the letters..."
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" type="submit"disabled={count <=0}>
        Submit
      </button>
    </form>
  );
};

export default WordInput