import {
  GET_ALBUMS_FAIL,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_LOADING,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_ALBUMS_LOADING,
  });
  axiosInstance(`${ROOT_URL}wp-json/buddyboss/v1/media/albums`)
    .then(res => {
      dispatch({
        type: GET_ALBUMS_SUCCESS,
        payload: res.data,
      });
      console.log(data, 'albums');
    })
    .catch(err => {
      dispatch({
        type: GET_ALBUMS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
