import {
  GET_PHOTOS_FAIL,
  GET_PHOTOS_LOADING,
  GET_PHOTOS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_PHOTOS_LOADING,
  });
  axiosInstance(`${ROOT_URL}wp-json/buddyboss/v1/media`)
    .then(res => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: res.data,
      });
      console.log(data, 'PHOTOS');
    })
    .catch(err => {
      dispatch({
        type: GET_PHOTOS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
      // console.log(error, 'something went wrong');
    });
};
