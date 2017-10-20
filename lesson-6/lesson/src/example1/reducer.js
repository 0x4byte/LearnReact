import { createAction, handleActions } from 'redux-actions';
import dotProp from 'dot-prop-immutable';

// Action Creators
export const increment = createAction('example-1/COUNTER_INCREMENT');
export const setRandomNum = createAction('example-1/SET_RANDOMNUM');

// Reducer
const initialState = {
  total: 0,
  randomNum: 0,
};

const reducer = handleActions(
  {
    [increment]: state => dotProp.set(state, 'total', state.total + 1),
    [setRandomNum]: (state, { payload }) =>
      dotProp.set(state, 'randomNum', payload)
    ,
  },
  initialState
);

export default reducer;
