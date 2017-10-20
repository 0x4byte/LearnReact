import { createAction, handleActions } from 'redux-actions';
import dotProp from 'dot-prop-immutable';

// Action Creators
export const increment = createAction('example-2/COUNTER_INCREMENT');
export const setClickTime = createAction('example-2/SET_CLICK_TIME');

// Reducer
const initialState = {
  total: 0,
  clickTime: '',
};

const reducer = handleActions(
  {
    [increment]: state => dotProp.set(state, 'total', state.total + 1),
    [setClickTime]: (state, { payload }) =>
      dotProp.set(state, 'clickTime', payload)
    ,
  },
  initialState
);

export default reducer;
