import {
  //get groups
  GROUPS_SUCCESS,
  GROUPS_LOADING,
  GROUPS_FAIL,
  // GET_USER_ID_FAIL,
  // GET_USER_ID_LOADING,
  GET_USER_ID_SUCCESS,
  //get profiles
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_LOADING,
  // get members
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
  GET_MEMBERS_LOADING,
  // get messages
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_MESSAGES_LOADING,
} from '../../constants/actionTypes';

const expatsReducer = (state, {type, payload}) => {
  switch (type) {
    case GROUPS_LOADING:
      return {
        ...state,
        getGroups: {
          loading: true,
          error: null,
        },
      };
    case GROUPS_SUCCESS:
      return {
        ...state,
        getGroups: {
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GROUPS_FAIL:
      return {
        ...state,
        getGroups: {
          loading: false,
          error: payload,
        },
      };
    case GET_USER_ID_SUCCESS:
      return {
        ...state,
        getUser_Id: payload,
        // isLoading: false,
      };
    // case GET_USER_ID_FAIL:
    //   return {
    //     ...state,
    //     errors: payload,
    //     isLoading: false,
    //   };
    // case GET_USER_ID_LOADING:
    //   return {
    //     ...state,
    //     errors: null,
    //     isLoading: true,
    //   };

    // get Profile...
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfile: {
          loading: false,
          data: payload,
        },
      };
    case GET_PROFILE_LOADING:
      return {
        ...state,
        getProfile: {
          loading: true,
          error: null,
        },
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        getProfile: {
          loading: false,
          error: payload,
        },
      };
    // GET ALL- MEMBERS
    case GET_MEMBERS_LOADING:
      return {
        ...state,
        getMembers: {
          loading: true,
          error: null,
        },
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        getMembers: {
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_MEMBERS_FAIL:
      return {
        ...state,
        getMembers: {
          loading: false,
          error: payload,
        },
      };
    // get messages
    case GET_MESSAGES_LOADING:
      return {
        ...state,
        getMessages: {
          ...state.getMessages,
          loading: true,
          error: null,
        },
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        getMessages: {
          ...state.getMessages,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        getMessages: {
          ...state.getMessages,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
export default expatsReducer;
