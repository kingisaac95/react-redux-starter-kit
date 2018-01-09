import * as types from '../types/types';
import request from 'axios';

function setRequestToken() {
  // request.defaults.headers.common.Authorization = localStorage.auth_token;
}

const fetchSuccess = (data) => {
  return {
    type: types.FETCH_SUCCESS,
    data
  };
};

const fetchFailure = (error) => {
  return {
    type: types.FETCH_FAILURE,
    error
  };
};

export const fetch = () => {
  return (dispatch) => {
    setRequestToken();
    return request.get('/api/v1/')
      .then(res => {
        return dispatch(fetchSuccess(res.data));
      }, error => dispatch(fetchFailure(error.response.data.error)));
  };
};
