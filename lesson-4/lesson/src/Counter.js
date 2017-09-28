import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const actions = {
  increment: value => {
    return { type: 'INCREMENT', payload: value }
  },
  decrement: () => {
    return { type: 'DECREMENT' }
  },
}

const initState = 0;
const reducers = (state = initState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducers);

const Counter = () => {
  return (
    <div>
      <div>{ store.getState() }</div>
      <button onClick={() => store.dispatch(actions.increment(2))}>+</button>
      <button onClick={() => store.dispatch(actions.decrement())}>-</button>
    </div>
  )
}

const render = () => {
  return ReactDOM.render(<Counter />, document.getElementById('root'))
}

render();
store.subscribe(render);




