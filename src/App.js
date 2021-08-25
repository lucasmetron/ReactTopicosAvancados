import React, { useState } from 'react'
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {

  const [myList, setMyList] = useState([]);

  function add() {
    setMyList([...myList, { id: Date.now() }])
  }

  function remove() {

    if (myList.length) {
      setMyList(myList.splice(1))
    }
  }

  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>

      <TransitionGroup>
        {

          myList.map(item => {
            return <CSSTransition appear={true} key={item.id} timeout={300} classNames={{
              enter: 'entrando',
              exitActive: 'saindo'
            }} >
              {
                (status) => {
                  return <div className={'btn'}> {item.id} </div>
                }
              }

            </CSSTransition>
          })
        }
      </TransitionGroup>
    </div>
  );
}

export default App;
