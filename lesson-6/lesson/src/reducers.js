import { combineReducers } from 'redux';
import example1 from './example1/reducer';
import example2 from './example2/reducer';
import example3 from './example3/reducer';

const reducer = combineReducers({
  example1,
  example2,
  example3,
});

export default reducer;
