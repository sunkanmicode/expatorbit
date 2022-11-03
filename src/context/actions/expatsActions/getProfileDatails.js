import {
  GET_PROFILE_FAIL,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default (id) => dispatch => {
  dispatch({
    type: GET_PROFILE_LOADING,
  });
  axiosInstance.get(`${ROOT_URL}wp-json/buddyboss/v1/members/${id}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data,
      });

      console.log(data, 'PROFILE');
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: err.response
          ? err.response.data
          : {err: 'something went wrong'},
      });
    });
};


