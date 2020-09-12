import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-inner">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <div>{count}</div>
      </div>
    </div>
  );
}

export default App;
