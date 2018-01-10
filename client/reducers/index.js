import { combineReducers } from 'redux';
import sample from './sampleReducer';
import anotherSample from './anotherSampleReducer';

const rootReducer = combineReducers({
  sample,
  anotherSample
});

export default rootReducer;
