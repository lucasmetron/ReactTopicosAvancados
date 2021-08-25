import React, { useState } from 'react'
import './App.css';
import Transition from 'react-transition-group/Transition'

function App() {

  const [isOn, setIson] = useState(true)

  function handleClick() {
    setIson(!isOn)
  }

  return (
    <div>
      <Transition appear={true} unmountOnExit={true} in={isOn} timeout={{
        enter: 300,
        exit: 500
      }} >
        {
          (status) => {
            return <button onClick={handleClick} className={'btn ' + status}> Click </button>
          }
        }

      </Transition>


    </div>
  );
}

export default App;
