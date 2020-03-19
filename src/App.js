import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const incAmount = 5;

  return (
    <div className="App">
      Hello
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(incAmount))}>+</button>
      <button onClick={() => dispatch(decrement(incAmount))}>-</button>
      {isLogged && <h3>Valuable info for secret eyes</h3>}
    </div>
  );
}

export default App;
