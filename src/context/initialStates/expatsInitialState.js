export default {
  getGroups: {
    data: [],
    error: null,
    loading: false,
  },
  getMembers: {
    data: [],
    error: null,
    loading: false,
  },
  getProfile: {
    data: {},
    error: null,
    loading: false,
  },
  getMessages: {
    data: [],
    error: null,
    loading: false,
  },
  getTimeline: {
    data: [],
    loading: false,
    error: null,
  },
  getPhotos: {
    photoData: [],
    photoLoading: false,
    photoError: null,
  },
  getVideos: {
    videoData: [],
    videoLoading: false,
    videoError: null,
  },
  getAlbums: {
    albumsData: [],
    albumsLoading: false,
    albumsError: null,
  },
  getDocuments: {
    documentsData: [],
    documentsLoading: false,
    documentsError: null,
  },
  getAllTmelineComments:{
    commentsData:[],
    commentLoading: false,
    commentError: null,
  },
  getUser_Id: '',
  likePost:'',
  commentOnPost:"",
  // getCommentsOnPost:[],
  memberInfo:{},
  isLoading: false,
  errors: null,
};
