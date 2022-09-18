import {
    LIKE_A_POST,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default (id) =>
  dispatch => {
    //  const payload = {
    //    id,
    //  };
    axiosInstance
      .patch(`/wp-json/buddyboss/v1/activity/${id}/favorite`)
      .then(res => {
        dispatch({
          type: LIKE_A_POST,
          payload: res.data,
        });
        console.log(res.data, 'LIKE_POST');
      })
      .catch(err => {
        console.log(err.response, 'err');
      });
  };
