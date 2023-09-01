// rootReducer.ts
import {combineReducers} from 'redux';
import saveoptions from './SavedOptions';

const rootReducer = combineReducers({
  saveoptions,
  // ...other reducers
});

export default rootReducer;
