import xIsNextReducer from './x-is-next-reducer';
import historyReducer from './history-reducer';
import stepNumberReducer from './step-number-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  xIsNext: xIsNextReducer,
  stepNumber: stepNumberReducer
});

export default rootReducer;