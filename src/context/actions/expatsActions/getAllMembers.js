import {
  GET_MEMBERS_FAIL,
  GET_MEMBERS_LOADING,
  GET_MEMBERS_SUCCESS,
} from '../../../constants/actionTypes';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  dispatch({
    type: GET_MEMBERS_LOADING,
  });
  getData(`${ROOT_URL}wp-json/buddyboss/v1/members`)
    .then(data => {
      dispatch({
        type: GET_MEMBERS_SUCCESS,
        payload: data,
      });
      // console.log(data, 'MEMBERS');
    })
    .catch(error => {
      dispatch({
        type: GET_MEMBERS_FAIL,
        payload: error.data,
      });
      console.log(error, 'something went wrong');
    });
};
