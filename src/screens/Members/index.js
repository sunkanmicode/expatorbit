import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import MembersComponent from '../../conponent/MembersComponent'
import { GlobalContext } from '../../context/Provider';
import getAllMembers from '../../context/actions/expatsActions/getAllMembers';

const Members = () => {
  const {
    expatsDispatch,
    expatsState: {
      getMembers:{data, loading}
    },
  } = useContext(GlobalContext);

  //  console.log({data, loading}, 'member500');

   useEffect(()=>{
    getAllMembers()(expatsDispatch);
   },[])


  return (
    <MembersComponent  
      getMembers={data}
      isLoading={loading}
    
    />
  )
}

export default Members