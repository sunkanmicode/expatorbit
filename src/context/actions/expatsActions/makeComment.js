import {COMMENT_ON_A_POST} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default (content,id) => dispatch => {
  // console.log(content, 'content');
  // console.log(id, 'conentID');
  const payload = {
    content,
  };
  axiosInstance
    .post(`wp-json/buddyboss/v1/activity/${id}/comment`, payload)
    .then(res => {
      dispatch({
        type: COMMENT_ON_A_POST,
        payload: res.data,
      });
      console.log(res.data, 'commentOnPost');
    })
    .catch(err => {
      console.log(err.response, 'err Make comment');
    });
};
