import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ProfileEditComp from '../../conponent/ProfileEditComp';


const ProfileEdit = () => {
  const {navigate} = useNavigation();
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
  // const handleClosePress = () => bottomSheetRef.current.close();
  // const handleOpenPress = () => bottomSheetRef.current.open();


  return (
    <ProfileEditComp
      snapPoints={snapPoints}
      bottomSheetRef={bottomSheetRef}
      handleSheetChanges={handleSheetChanges}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    />
  );
};

export default ProfileEdit
