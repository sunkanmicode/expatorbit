import { GET_MEMBER_INFO} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default id => dispatch => {
  axiosInstance
    .get(`/wp-json/buddyboss/v1/members/${id}`)
    .then(res => {
      dispatch({
        type: GET_MEMBER_INFO,
        payload: res.data,
      });
      console.log(res.data, 'GET_MEMBER_INFO');
    })
    .catch(err => {
      console.log(err.response, 'errINFRO');
    });
};
