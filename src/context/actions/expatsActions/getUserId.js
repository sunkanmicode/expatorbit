import {
  GET_USER_ID_FAIL,
  GET_USER_ID_LOADING,
  GET_USER_ID_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  // dispatch({
  //   type:   GET_USER_ID_LOADING,
  // });
  axiosInstance(`wp-json/wp/v2/users/me`)
    .then(res => {
        dispatch({
          type: GET_USER_ID_SUCCESS,
          payload:res.data,
        });
        // console.log(data, 'userId');
    })
    .catch(error => {
      // dispatch({
      //   type: GET_USER_ID_FAIL,
      //   payload: error.data,
      // });
      console.log(error, 'something went wrong');
    });
};


