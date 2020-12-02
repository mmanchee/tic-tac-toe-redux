import GameReducer from './game-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: GameReducer
});

export default rootReducer;