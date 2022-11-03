import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import MembersComponent from '../../conponent/MembersComponent'
import { GlobalContext } from '../../context/Provider';
import getAllMembers from '../../context/actions/expatsActions/getAllMembers';
import { useRoute } from '@react-navigation/native';
import memberInfoData from '../../context/actions/expatsActions/memberInfoData';

const Members = () => {
  const [filteMember, setFilterMember] = useState([])

  
  const {params} = useRoute()
  // console.log(params, 'params');
  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      getMembers: {data, loading},
    },
  } = useContext(GlobalContext);

  //  console.log({data, loading}, 'member500');
    // const byPersonal = data?.filter(r => r.friendship_status !== 'is_friend');
  const newMemberFilter = data?.filter(r => r.id != getUser_Id.id);
  const myConnections = newMemberFilter?.filter(r => r.friendship_status == 'is_friend');

    // console.log(byPersonal, 'ByPersonal900000');

//get single member
     const getSingleMember = id => {
       memberInfoData(id)(expatsDispatch);
     };

    const handFilter =()=>{
      // setFilterMember(myConnections);
      // newMemberFilter?.filter(r => r.friendship_status == 'is_friend');

    }
    // console.log(filteMember,myConnections, 'filtermember')


   

  useEffect(() => {
    getAllMembers()(expatsDispatch);
  }, []);

  return (
    <MembersComponent
      // getMembers={byPersonal}
      getMembers={newMemberFilter}
      isLoading={loading}
      handFilter={handFilter}
      getSingleMember={getSingleMember}
      // byPersonal={byPersonal}
      
    />
  );
}

export default Members