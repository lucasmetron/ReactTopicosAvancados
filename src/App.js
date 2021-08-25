import React, { useState } from 'react'
import './App.css';
import CSSTransition from 'react-transition-group/CSSTransition'

function App() {

  const [isOn, setIson] = useState(true)

  function handleClick() {
    setIson(!isOn)
  }

  return (
    <div>
      <CSSTransition appear={true} in={isOn} timeout={{
        enter: 300,
        exit: 500
      }} classNames={{
        enter: 'entrando',
        exitDone: 'saindo'
      }} >
        {
          (status) => {
            return <button onClick={handleClick} className={'btn'}> Click </button>
          }
        }

      </CSSTransition>

    </div>
  );
}

export default App;
