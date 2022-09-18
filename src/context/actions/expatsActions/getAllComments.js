import { GET_COMMENTS_ON_A_POST} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default (id) => dispatch => {
  
  axiosInstance
    .get(`/wp-json/buddyboss/v1/activity/${id}/comment`)
    .then(res => {
      dispatch({
        type: GET_COMMENTS_ON_A_POST,
        payload: res.data.comments,
      });
      // console.log(res.data, 'GET COMMENT');
    })
    .catch(err => {
      console.log(err.response, 'err get all comments');
    });
};
