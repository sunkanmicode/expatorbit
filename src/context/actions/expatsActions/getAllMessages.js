import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_LOADING,
  GET_MESSAGES_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_MESSAGES_LOADING,
  });
  axiosInstance
    .get(`${ROOT_URL}wp-json/buddyboss/v1/messages`)
    .then(data => {
      dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: data,
      });
      // console.log(data, 'MESSAGES');
    })
    .catch(err => {
      dispatch({
        type: GET_MESSAGES_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
