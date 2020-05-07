import React from 'react';
import Hello from './hello';
import './App.css'

function App() {
  const name = "react";
  return (
      <>
      <div className='gray-box'>{name}</div>
      <Hello />
      </>
  );
}

export default App;
