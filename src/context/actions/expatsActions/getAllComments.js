import {
  GET_COMMENTS_ON_A_POST,
  GET_ALL_COMMENTS_LOADING,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default id => dispatch => {
  dispatch({
    type: GET_ALL_COMMENTS_LOADING,
  });

  axiosInstance
    .get(`/wp-json/buddyboss/v1/activity/${id}/comment`)
    .then(res => {
      dispatch({
        // type: GET_COMMENTS_ON_A_POST,
        type:  GET_ALL_COMMENTS_SUCCESS,
        payload: res.data.comments,
      });
      console.log(res.data, 'GET COMMENT');
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_COMMENTS_ERROR,
        payload: err.response
          ? err.response.data.message
          : {error: 'something went wrong'},
      });
      // console.log(err.response, 'err get all comments');
    });
};
