import { createAction, handleActions } from 'redux-actions';
import dotProp from 'dot-prop-immutable';
import { get } from '../app/utils/request';

// Action Creators
export const increment = createAction('home/COUNTER_INCREMENT');
export const decrement = createAction('home/COUNTER_DECREMENT');

export const incrementAsync = amount => dispatch => {
  // 异步action-demo:请求豆瓣搜索书籍
  return get('/v2/book/search?q=肖生克').then(data => {
    console.log(data);

    dispatch(increment(amount));
  });
}


// Reducer
const initialState = {
  total: 0,
};

const reducer = handleActions(
  {
    [increment]: (state, { payload }) => {
      const amount = payload || 1;
      // 直接突变数据，可能不能引起相应组件re-render
      // state.total += 2;

      return dotProp.set(state, 'total', state.total + amount)
    },

    [decrement]: state => dotProp.set(state, 'total', state.total - 1),
  },
  initialState
);

export default reducer;
