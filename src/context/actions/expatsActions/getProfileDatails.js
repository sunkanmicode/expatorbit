import {
  GET_PROFILE_FAIL,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
} from '../../../constants/actionTypes';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default (id) => dispatch => {
  dispatch({
    type: GET_PROFILE_LOADING,
  });
  getData(`${ROOT_URL}wp-json/buddyboss/v1/members/${id}`)
    .then(data => {
      
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: data,
        });
      
      // console.log(data, 'PROFILE');
    })
    .catch(error => {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: error.data,
      });
      console.log(error, 'something went wrong');
    });
};


