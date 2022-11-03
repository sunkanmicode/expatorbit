import {useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import CommentsComponent from '../../conponent/CommentsComponent';
import makeComment from '../../context/actions/expatsActions/makeComment'
import getAllComments from '../../context/actions/expatsActions/getAllComments';
import {GlobalContext} from '../../context/Provider';

const Comments = () => {
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item, 'RouteComments');
  const [form, setForm] = React.useState({});

  // console.log(item.id, 'comment5555');
  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      likePost,
      commentOnPost,
      getCommentsOnPost,
      getAllTmelineComments:{commentsData,commentLoading,commentError },
      getTimeline: {data, loading},
    },
  } = useContext(GlobalContext);

  const reTryComment = (id)=>{
    getAllComments(id)(expatsDispatch);

  }

  React.useEffect(() => {
    getAllComments(item.id)(expatsDispatch);
  }, [commentOnPost, item.id]);

  console.log({commentOnPost, commentsData}, 'Comment80000');

  const onChangeForm = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log(form.content, 'form');
  };

  const onSubmit = (id) => {
    console.log(form, 'form');
     if (form.content) {
       makeComment(form.content, id)(expatsDispatch);
       setForm({})
     }
  };

  return (
    <CommentsComponent
      getCommentsOnPost={commentsData}
      onChangeForm={onChangeForm}
      onSubmit={onSubmit}
      item={item}
      commentLoading={commentLoading}
      commentError={commentError}
      reTryComment={reTryComment}
    />
  );
};;

export default Comments;
