import { useRoute } from '@react-navigation/native';
import React, {  useContext, useEffect, useState } from 'react'
// import { Text, View } from 'react-native'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Container from '../../conponent/Container'
import ProfileComponent from '../../conponent/ProfileComponent';
import getAllMembers from '../../context/actions/expatsActions/getAllMembers';
import getAllPhotos from '../../context/actions/expatsActions/getAllPhotos';
import getAllTimeLine from '../../context/actions/expatsActions/getAllTimeLine';
import getProfileDatails from '../../context/actions/expatsActions/getProfileDatails';
import { GlobalContext } from '../../context/Provider';

const Profile = () => {
  // const {params: {item = {}} = {}} = useRoute()
  // console.log(item, 'params3455');
  // console.log(getProfile, 'getProfile345');
  const {
    expatsDispatch,
    expatsState: {
      getUser_Id,
      getMembers,
      getProfile: {data, loading},
      getPhotos: {photoData},
    },
  } = useContext(GlobalContext);

   const connectionTotal = getMembers.data.length;

  useEffect(() => {
    // getProfileDatails(getUser_Id);
    getProfileDatails(getUser_Id.id)(expatsDispatch);
    getAllPhotos()(expatsDispatch);
    getAllMembers()(expatsDispatch);
  }, []);

  return (
    <ProfileComponent
      getUser_Id={getUser_Id}
      loading={loading}
      getProfile={data}
      photoData={photoData}
      connectionTotal={connectionTotal}
      // profile={item}
    />
    // <Text style={{color:"#333"}}>Hello23455</Text>
  );
};


export default Profile