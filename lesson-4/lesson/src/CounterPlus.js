import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const actions = {
  increment: () => {
    return { type: 'INCREMENT' }
  },
  decrement: () => {
    return { type: 'DECREMENT' }
  },
}

const initState = {
  count: 0,
}
const reducers = (state = initState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
    return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducers, initState);

const Counter = props => {
  const { count, increment, decrement } = props

  return (
    <div>
      <div>{ count }</div>
      <button onClick={ increment }>+</button>
      <button onClick={ decrement }>-</button>
    </div>
  )
}

const CounterContainer = connect(state => ({
  count: state.count,
}), actions)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
)
