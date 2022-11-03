import {useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import { useState } from 'react';
import {Text, View} from 'react-native';
import ViewMemberComponent from '../../conponent/ViewMemberComponent';
import {GlobalContext} from '../../context/Provider';

const ViewMember = () => {
 const sheetRef = React.useRef(null);
  const [modelVisible, setModelVisible] = useState(false);
  const [modelVisible2, setModelVisible2] = useState(false)
  const [modelVisible3, setModelVisible3] = useState(false);
    const [show2, setShow2] = React.useState(false);



  const {expatsDispatch, expatsState} = useContext(GlobalContext);
  console.log(expatsState, 'expatsState');
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item, 'viewmember');

 const closeSheet = ()=>{
  if(sheetRef.current){
    sheetRef.current.close()
  }
 }
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  


  return (
    <ViewMemberComponent
      viewMember={item}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      modelVisible={modelVisible}
      setModelVisible={setModelVisible}
      modelVisible2={modelVisible2}
      setModelVisible2={setModelVisible2}
      modelVisible3={modelVisible3}
      setModelVisible3={setModelVisible3}
      show2={show2} 
      setShow2={setShow2}
    />
  );
};

export default ViewMember;
