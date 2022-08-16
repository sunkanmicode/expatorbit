// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   LOGIN_FAIL,
//   LOGIN_LOADING,
//   LOGIN_SUCCESS,
// } from '../../../constants/actionTypes';
// import postData from '../../../utils/api';

//  const ROOT_URL = 'https://expatorbit.in/';

// export default ({password, username}) =>
//   dispatch => {
//     dispatch({
//       type: LOGIN_LOADING,
//     });
//     const payload = {
//       username,
//       password,
//     };
//     postData(`${ROOT_URL}/wp-json/jwt-auth/v1/token`, payload)
//       .then(data => {
//         //  if (!data.ok) {
//         //   throw Error('wrong credentials');
//         // }
//         AsyncStorage.setItem('token', data.token);
//         AsyncStorage.setItem('user', JSON.stringify(data.user));
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: data,
//         });
//         console.log(data, '678');
//         console.log(token, '800');
//       })
//       .catch(error => {
//         dispatch({
//           type: LOGIN_FAIL,
//           payload: error.message,
//         });
//         console.log(error.message);
//       });
//   };

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({password, username}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    const payload = {
      password,
      username,
    };
    axiosInstance
      .post(`/wp-json/jwt-auth/v1/token`, payload)
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        console.log(res.data, 'user600');
      })
      .catch(err => {
        console.log(err, 'err');
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
      });
  };

 




    