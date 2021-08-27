//@flow
import React, { useState } from 'react' //lib q precisa ser importada
import './App.css';




function App(props) {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
