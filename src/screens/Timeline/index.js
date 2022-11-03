import { useRoute } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import TimelineComponent from '../../conponent/TimelineComponent'
import getAllComments from '../../context/actions/expatsActions/getAllComments'
import getAllTimeLine from '../../context/actions/expatsActions/getAllTimeLine'
import postLike from '../../context/actions/expatsActions/postLike'
import { GlobalContext } from '../../context/Provider'

const Timeline = () => {
  const [openComment, setOpenComment] = useState(false);
  const [openCommentTextInput, setOpenCommentTextInput] = useState(false);
  const sheetRef = React.useRef(null);

  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      likePost,
      commentOnPost,
      getCommentsOnPost,
      getTimeline: {data, loading, error},
    },
  } = useContext(GlobalContext);

  console.log(error, 'timeline');
  //? logic for like post
  const newData = data.map(item => {
    if (item.id === likePost.id) {
      return likePost;
    } else {
      return item;
    }
  });

  const getAllCommentOnPost = id => {
    console.log(id, 'commentId');
    getAllComments(id)(expatsDispatch);
  };

  // console.log(getUser_Id.id, 'getUser_Id.id');

  const favoritePost = id => {
    // console.log(id, 'userId')
    postLike(id)(expatsDispatch);
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getAllTimeLine(getUser_Id.id)(expatsDispatch);
  }, [getUser_Id.id, expatsDispatch]);

  return (
    <TimelineComponent
      data={newData}
      loading={loading}
      error={error}
      favoritePost={favoritePost}
      openComment={openComment}
      setOpenComment={setOpenComment}
      getUser_Id={getUser_Id}
      getAllCommentOnPost={getAllCommentOnPost}
      closeSheet={closeSheet}
      openSheet={openSheet}
      sheetRef={sheetRef}
    />
  );
}

export default Timeline
