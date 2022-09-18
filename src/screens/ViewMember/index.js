import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import ViewMemberComponent from '../../conponent/ViewMemberComponent'
import { GlobalContext } from '../../context/Provider';

const ViewMember = () => {
  const {
    expatsDispatch,
    expatsState,
  } = useContext(GlobalContext);
  console.log(expatsState, 'expatsState');
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item, 'viewmember');
  return <ViewMemberComponent viewMember={item} />;
};

export default ViewMember
