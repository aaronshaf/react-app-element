import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-inner">
        <button onClick={() => setCount(count + 1)}>
          {props['button-title']}
        </button>
        <div>{count}</div>
      </div>
      <div className="hint">Psssst. View my source.</div>
      <a
        className="github-link"
        href="https://github.com/aaronshaf/react-app-element"
      >
        GitHub
      </a>
    </div>
  );
}

export default App;
