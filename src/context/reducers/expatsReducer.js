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
  //get Timeline
  GET_TIMELINE_LOADING,
  GET_TIMELINE_FAIL,
  GET_TIMELINE_SUCCESS,
  //get videos
  GET_PHOTOS_FAIL,
  GET_PHOTOS_LOADING,
  GET_PHOTOS_SUCCESS,
  //get media video
  GET_VIDEOS_FAIL,
  GET_VIDEOS_LOADING,
  GET_VIDEOS_SUCCESS,
  // get albums
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
  GET_ALBUMS_LOADING,
  //like a post
  LIKE_A_POST,
  //comment on a post
  COMMENT_ON_A_POST,
  //get comments on post
  GET_COMMENTS_ON_A_POST,
  GET_ALL_COMMENTS_LOADING,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_ERROR,
  //get member info
  GET_MEMBER_INFO,
} from '../../constants/actionTypes';

const expatsReducer = (state, {type, payload}) => {
  switch (type) {
    case GROUPS_LOADING:
      return {
        ...state,
        getGroups: {
          ...state.getGroups,
          loading: true,
          error: null,
        },
      };
    case GROUPS_SUCCESS:
      return {
        ...state,
        getGroups: {
          ...state.getGroups,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GROUPS_FAIL:
      return {
        ...state,
        getGroups: {
          ...state.getGroups,
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
          ...state.getProfile,
          loading: false,
          data: payload,
        },
      };
    case GET_PROFILE_LOADING:
      return {
        ...state,
        getProfile: {
          ...state.getProfile,
          loading: true,
          error: null,
        },
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        getProfile: {
          ...state.getProfile,
          loading: false,
          error: payload,
        },
      };
    // GET ALL- MEMBERS
    case GET_MEMBERS_LOADING:
      return {
        ...state,
        getMembers: {
          ...state.getMembers,
          loading: true,
          error: null,
        },
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        getMembers: {
          ...state.getMembers,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_MEMBERS_FAIL:
      return {
        ...state,
        getMembers: {
          ...state.getMembers,
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
    //get Timeline
    case GET_TIMELINE_LOADING:
      return {
        ...state,
        getTimeline: {
          ...state.getTimeline,
          loading: true,
          error: null,
        },
      };
    case GET_TIMELINE_SUCCESS:
      return {
        ...state,
        getTimeline: {
          ...state.getTimeline,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_TIMELINE_FAIL:
      return {
        ...state,
        getTimeline: {
          ...state.getTimeline,
          loading: false,
          error: payload,
        },
      };
    //get all media photos
    case GET_PHOTOS_LOADING:
      return {
        ...state,
        getPhotos: {
          ...state.getPhotos,
          photoLoading: true,
          photoError: null,
        },
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        getPhotos: {
          ...state.getPhotos,
          photoLoading: false,
          photoData: payload,
          photoError: null,
        },
      };
    case GET_PHOTOS_FAIL:
      return {
        ...state,
        getPhotos: {
          ...state.getPhotos,
          photoLoading: false,
          photoError: payload,
        },
      };
    // get all media videos
    case GET_VIDEOS_LOADING:
      return {
        ...state,
        getVideos: {
          ...state.getVideos,
          videoLoading: true,
          videoError: null,
        },
      };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        getVideos: {
          ...state.getVideos,
          videoLoading: false,
          videoData: payload,
          videoError: null,
        },
      };
    case GET_VIDEOS_FAIL:
      return {
        ...state,
        getVideos: {
          ...state.getVideos,
          videoLoading: false,
          videoError: payload,
        },
      };
    // get all albums
    case GET_ALBUMS_LOADING:
      return {
        ...state,
        getAlbums: {
          ...state.getAlbums,
          albumsLoading: true,
          albumsError: null,
        },
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        getAlbums: {
          ...state.getAlbums,
          albumsLoading: false,
          albumsData: payload,
          albumsError: null,
        },
      };
    case GET_ALBUMS_FAIL:
      return {
        ...state,
        getAlbums: {
          ...state.getAlbums,
          albumsLoading: false,
          albumsError: payload,
        },
      };
    //Like post
    case LIKE_A_POST:
      return {
        ...state,
        // ...state.likepost,
        likePost: payload,
      };
    //comment on post
    case COMMENT_ON_A_POST:
      return {
        ...state,
        commentOnPost: payload,
      };
    //get comments on post
    // case GET_COMMENTS_ON_A_POST:
    //   return {
    //     ...state,
    //     // ...getCommentsOnPost,
    //     getCommentsOnPost: payload,
    //   };

    case GET_ALL_COMMENTS_LOADING:
      return {
        ...state,
        getAllTmelineComments: {
          ...state.getAllTmelineComments,
          commentLoading: true,
          commentError: null,
        },
      };
    case GET_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        getAllTmelineComments: {
          ...state.getAllTmelineComments,
          commentLoading: false,
          commentsData: payload,
          commentError: null,
        },
      };
    case GET_ALL_COMMENTS_ERROR:
      return {
        ...state,
        getAllTmelineComments: {
          ...state.getAllTmelineComments,
          commentLoading: false,
          commentError: payload,
        },
      };

    //get member info
    case GET_MEMBER_INFO:
      return {
        ...state,
        memberInfo: payload,
      };

    default:
      return state;
  }
};
export default expatsReducer;
