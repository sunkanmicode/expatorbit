// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GROUPS_FAIL,
  GROUPS_LOADING,
  GROUPS_SUCCESS,
} from '../../../constants/actionTypes';
import postData, { getData } from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () =>
  (dispatch) => {
    dispatch({
      type: GROUPS_LOADING,
    });
    
    getData(`${ROOT_URL}wp-json/buddyboss/v1/groups`)
      .then(data => {
        // AsyncStorage.setItem('token', data.token);
        // AsyncStorage.setItem('user', JSON.stringify(data.user));
        dispatch({
          type: GROUPS_SUCCESS,
          payload: data,
        });
        // console.log(data, 'PPPP');
      })
      .catch(error => {
        dispatch({
            type: GROUPS_FAIL,
            payload: error.data
        })
        console.log(error, 'something went wrong');
      });
  };
