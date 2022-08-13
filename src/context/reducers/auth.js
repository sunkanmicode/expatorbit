import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../constants/actionTypes';
const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LOGIN_SUCCESS:
      console.log(state, 'isLoggedState')
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        data: payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
export default auth;
