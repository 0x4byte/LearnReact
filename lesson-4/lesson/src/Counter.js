import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const actions = {
  increment: () => {
    return { type: 'INCREMENT' }
  },
  decrement: () => {
    return { type: 'DECREMENT' }
  },
}

const reducers = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
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
      <button onClick={() => store.dispatch(actions.increment())}>+</button>
      <button onClick={() => store.dispatch(actions.decrement())}>-</button>
    </div>
  )
}

const render = () => {
  return ReactDOM.render(<Counter />, document.getElementById('root'))
}

render();
store.subscribe(render);
