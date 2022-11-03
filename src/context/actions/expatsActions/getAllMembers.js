import {
  GET_MEMBERS_FAIL,
  GET_MEMBERS_LOADING,
  GET_MEMBERS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_MEMBERS_LOADING,
  });
  axiosInstance(`${ROOT_URL}wp-json/buddyboss/v1/members?scope=all`)
    .then(res => {
      dispatch({
        type: GET_MEMBERS_SUCCESS,
        payload: res.data,
      });
      // console.log(data, 'MEMBERS');
    })
    .catch(err => {
      dispatch({
        type: GET_MEMBERS_FAIL,
        payload: err.response
          ? err.response.data
          : {err: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
