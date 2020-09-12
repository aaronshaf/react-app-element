import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-inner">
        <button onClick={() => setCount(count + 1)}>Press me</button>
        <div>{count}</div>
      </div>
      <div className="hint">Psssst. View my source.</div>
    </div>
  );
}

export default App;
