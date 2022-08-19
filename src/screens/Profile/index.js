import { useRoute } from '@react-navigation/native';
import React, {  useContext, useEffect, useState } from 'react'
// import { Text, View } from 'react-native'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Container from '../../conponent/Container'
import ProfileComponent from '../../conponent/ProfileComponent';
import getProfileDatails from '../../context/actions/expatsActions/getProfileDatails';
import { GlobalContext } from '../../context/Provider';

const Profile = () => {


  // const {params: {item = {}} = {}} = useRoute()
  // console.log(item, 'params');
  const {
    expatsDispatch,
    expatsState: {getUser_Id, 
      getProfile:{data, loading}
    },
  } = useContext(GlobalContext);

  //  console.log({ getUser_Id, loading, data}, 'expatsState234');
  //  console.log({getUser_Id}, 'getUser_id');


  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getProfileDatails(getUser_Id)(expatsDispatch);
  }, [getUser_Id]);


  

  return (
    <ProfileComponent
      getUser_Id={getUser_Id}
      loading={loading}
      getProfile={data}
      // profile={item}
    
    />
  );
}


export default Profile