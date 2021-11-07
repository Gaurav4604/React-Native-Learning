import {combineReducers} from 'redux';

const inputReducer = (state = '', action) => {
  if (action.type === 'INPUT_CHANGE') {
    return action.payload;
  }
  return state;
};

const termSubmitReducer = (state = '', action) => {
  if (action.type === 'INPUT_SUBMIT') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  input: inputReducer,
  term: termSubmitReducer,
});
