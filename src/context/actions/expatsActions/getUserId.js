import {
  GET_USER_ID_FAIL,
  GET_USER_ID_LOADING,
  GET_USER_ID_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
} from '../../../constants/actionTypes';
import postData, {getData} from '../../../utils/api';

const ROOT_URL = 'https://expatorbit.in/';

export default () => dispatch => {
  // dispatch({
  //   type:   GET_USER_ID_LOADING,
  // });
  getData(`${ROOT_URL}wp-json/wp/v2/users/me`)
    .then(data => {
        dispatch({
          type: GET_USER_ID_SUCCESS,
          payload: data.id,
        });
        console.log(data.id, 'userId');
    })
    .catch(error => {
      // dispatch({
      //   type: GET_USER_ID_FAIL,
      //   payload: error.data,
      // });
      console.log(error, 'something went wrong');
    });
};


//  export const getProfileDatails = async () =>  {
//    dispatch({
//      type: GET_PROFILE_LOADING,
//    });
//    const result = await getData(`${ROOT_URL}wp-json/buddyboss/v1/members`);
//    const data = await result.json();
//    dispatch({
//      type: GET_PROFILE_SUCCESS,
//      payload: data,
//    });
//    console.log(data, 'members');
//  };

// export const getProfileDatails = (id) => dispatch => {
//   dispatch({
//     type: GET_PROFILE_LOADING,
//   });
//   getData(`${ROOT_URL}wp-json/buddyboss/v1/members`)
//     .then(data => {
//       dispatch({
//         type: GET_PROFILE_SUCCESS,
//         payload: data,
//       });
//       console.log(data, 'PROFILE');
//     })
//     .catch(error => {
//       dispatch({
//         type: GET_PROFILE_FAIL,
//         payload: error.data,
//       });
//       console.log(error, 'something went wrong');
//     });
// };





//    const getUserId = async () => {
//    let headers = {'Content-Type': 'application/json'};
//    const token = await AsyncStorage.getItem('token');
//    if (token) {
//      headers['Authorization'] = `Bearer ${token}`;
//    }
//    console.log(token, 'token- gotten');
//
//    const userId = await fetch('https://expatorbit.in/wp-json/wp/v2/users/me', {
//      method: 'GET',
//      headers: headers,
//    });

//    const result = await userId.json();
//    console.log(result.id, '700000');
//  };
