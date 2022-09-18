import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_LOADING,
  GET_MESSAGES_SUCCESS,
} from '../../../constants/actionTypes';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_MESSAGES_LOADING,
  });
  getData(`${ROOT_URL}wp-json/buddyboss/v1/messages`)
    .then(data => {
      dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: data,
      });
      // console.log(data, 'MESSAGES');
    })
    .catch(error => {
      dispatch({
        type: GET_MESSAGES_FAIL,
        payload: error.data,
      });
      console.log(error, 'something went wrong');
    });
};
