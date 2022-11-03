import {
  GET_TIMELINE_LOADING,
  GET_TIMELINE_FAIL,
  GET_TIMELINE_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default (id) => dispatch => {
  dispatch({
    type: GET_TIMELINE_LOADING,
  });
  axiosInstance(`${ROOT_URL}/wp-json/buddyboss/v1/activity?per_page=20`)
    .then(res => {
      dispatch({
        type: GET_TIMELINE_SUCCESS,
        payload: res.data,
      });
      // console.log(res.data, 'TIMELINE');
    })
    .catch(err => {
      dispatch({
        type: GET_TIMELINE_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
