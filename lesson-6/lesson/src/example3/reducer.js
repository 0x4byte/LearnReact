import { createAction, handleActions } from 'redux-actions';
import dotProp from 'dot-prop-immutable';

// Action Creators
export const setTodo = createAction('example-3/SET_TODO');
export const delTodo = createAction('example-4/SET_DEL_TODO');

// Reducer
const initialState = {
  list: [],
};

const reducer = handleActions(
  {
    [setTodo]: (state, { payload }) =>
      dotProp.set(state, 'list', [ ...state.list, payload ])
    ,
    [delTodo]: (state, { payload }) => {
      const { list } = state;
      const _list = list.filter(item => item.id !== payload.id);

      return dotProp.set(state, 'list', _list);
    },
  },
  initialState
);

export default reducer;
