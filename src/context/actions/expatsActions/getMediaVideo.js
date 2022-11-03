import {
  GET_VIDEOS_FAIL,
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_VIDEOS_LOADING,
  });
  axiosInstance
    .get(`/wp-json/buddyboss/v1/video`)
    .then(res => {
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data, 'VIDEOS');
    })
    .catch(err => {
      dispatch({
        type: GET_VIDEOS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
