import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import GroupsComponent from '../../conponent/GroupsComponent'
import groups from '../../context/actions/expatsActions/groups';
import {GlobalContext} from '../../context/Provider';

const Groups = () => {
  const {
    expatsDispatch, 
    expatsState:{
    getGroups:{data, loading},
  },
} = useContext(GlobalContext);
// console.log({data, loading}, 'GROUP');

useEffect(()=>{ 
  groups()(expatsDispatch);
},[])
  
  return (
    <>
      <GroupsComponent data={data} loading={loading} />
    </>
  );
}

export default Groups