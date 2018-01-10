import * as types from '../types/types';

const initialState = {
  creating: false,
  fetching: false,
  deleting: false,
  error: '',
  data: [],
};

export default function anotherSampleReducer(state = initialState, action) {
  let newUser = {};
  switch(action.type) {
    case types.FETCH:
      return Object.assign({}, state, {fetching: true});
    case types.FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        data: action.data
      });
    case types.FETCH_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      });

    default:
      return state;
  }
}
