import React, { useState } from 'react'
import './App.css';

function App() {

  const [isOn, setIson] = useState(true)

  function handleClick() {
    setIson(!isOn)
  }

  return (
    <div>
      <button onClick={handleClick} className={'btn ' + (isOn == true ? 'ligado' : 'desligado')}> Click</button>
    </div>
  );
}

export default App;
