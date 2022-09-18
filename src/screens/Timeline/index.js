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

  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      likePost,
      commentOnPost,
      getCommentsOnPost,
      getTimeline: {data, loading},
    },
  } = useContext(GlobalContext);

  // console.log(getCommentsOnPost, 'Comment');
  //? logic for like post
  const newData = data.map(item => {
    if (item.id === likePost.id) {
      return likePost;
    } else {
      return item;
    }
  });

    const getAllCommentOnPost =(id)=>{
      console.log(id, 'commentId')
      getAllComments(id)(expatsDispatch);
    }

  // console.log(getUser_Id.id, 'getUser_Id.id');

  const favoritePost = id => {
    // console.log(id, 'userId')
    postLike(id)(expatsDispatch);
  };

  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getAllTimeLine(getUser_Id.id)(expatsDispatch);
  }, [getUser_Id.id,expatsDispatch]);

  return (
    <TimelineComponent
      data={newData}
      loading={loading}
      favoritePost={favoritePost}
      openComment={openComment}
      setOpenComment={setOpenComment}
      getUser_Id={getUser_Id}
      getAllCommentOnPost={getAllCommentOnPost}
    />
  );
}

export default Timeline
