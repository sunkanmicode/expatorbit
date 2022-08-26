import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import ViewMemberComponent from '../../conponent/ViewMemberComponent'

const ViewMember = () => {
  // const parama =   useRoute();
  // console.log(parama, 'viewmember')
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item, 'viewmember');
  return <ViewMemberComponent viewMember={item} />;
};

export default ViewMember
