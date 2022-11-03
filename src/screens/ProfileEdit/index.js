import { useNavigation, useRoute } from '@react-navigation/native'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ProfileEditComp from '../../conponent/ProfileEditComp';


const ProfileEdit = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();

  
  // const parama = useRoute();
  // console.log(parama, 'getProfile3000');
  const {params: {getProfile = {}} = {}} = useRoute()
  console.log(getProfile, 'params3455');

  const [isOpen, setIsOpen] = useState(true);
  // // ref
  const bottomSheetRef = useRef(null);

  // // variables
  // const snapPoints = useMemo(() => ['20%', '90%'], []);
  const snapPoints = ['40%', '60%', '85%'];

  // // callbacks
  const handleSheetChanges = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    // console.log("handleSheetChanges", index);
  }, []);

  //onChange
    const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    }
  

  return (
    <ProfileEditComp
      snapPoints={snapPoints}
      bottomSheetRef={bottomSheetRef}
      handleSheetChanges={handleSheetChanges}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      getProfile={getProfile}
      onChange={onChange}
      form={form}
    />
  );
};

export default ProfileEdit
