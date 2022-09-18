import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
var moment = require('moment');
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import CustomDatePicker from '../CustomDatePicker';
import CustomSelectOption from '../CustomSelectOption';
import Icon from '../CustomIcon';
import ImagePickerCrop from '../bottomSheetContainer/ImagePicker';
import VideoPlayer from 'react-native-video-controls';
import DropDownPicker from 'react-native-dropdown-picker';
 

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const RegisterComponent = ({
  form,
  errors,
  navigation,
  onChangeForm,
  onSubmit,
  datePickerOpen,
  setDatePickerOpen,
  date,
  options,
  options2,
  options3
}) => {
  //! working...
    // const [open, setOpen] = useState(false);
    //  const [value, setValue] = useState([
    //    'italy',
    //    'spain',
    //    'barcelona',
    //    'finland',
    //  ]);
    //  const [items, setItems] = useState([
    //    {label: 'Spain', value: 'spain'},
    //    {label: 'Madrid', value: 'madrid', parent: 'spain'},
    //    {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    //    {label: 'Italy', value: 'italy'},
    //    {label: 'Rome', value: 'rome', parent: 'italy'},

    //    {label: 'Finland', value: 'finland'},
    //  ]);
    //! end of working
  const [isOpen, setIsOpen] = useState(false);
  const [selectLocalFile, setSelectLocalFile] = useState(null);
  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);
  const [formStep, setFormStep] = useState(0);
  const {navigate} = useNavigation();

   const [selectedTeam, setSelectedTeam] = useState({});
   const [selectedTeams, setSelectedTeams] = useState([]);

 



  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['20%', '60%', '85%'];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    // console.log("handleSheetChanges", index);
  }, []);

  

  const onFileSelected = image => {
    setIsOpen(false);
    setSelectLocalFile(image);
    console.log(image, 'img');
  };

  console.log(selectLocalFile, 'selectLocalFile');

  const completeNextForm = () => {
    setFormStep(cur => cur + 1);
  };
   const completePrevForm = () => {
    if(formStep === 0){
      return null
    }
     setFormStep(cur => cur - 1);
   };

  // const submitButtom = ()=>{
  //   if (formStep === 2) {
  //     {
  //       <CustomButton primary onPress={completeForm} title="Next" />;
  //     }
  //   } else {
      
  //     {
  //       <CustomButton
  //         primary
  //         onPress={() => {
  //           navigate(LOGIN);
  //         }}
  //         title="Submit"
  //       />;
  //     }
  //   }
  // }
  const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
]
function onMultiChange() {
  return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
}

function onChange() {
  return val => setSelectedTeam(val);
}

  return (
    <>
      <View style={styles.signUpWrapper}>
        <TouchableOpacity
          onPress={() => {
            completePrevForm();
          }}>
          <Icon type="AntDesign" name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        {formStep === 3 ? (
          <Text style={styles.signUp}>Verification</Text>
        ) : (
          <Text style={styles.signUp}>Sign up</Text>
        )}
        <View />
      </View>

      <Container>
        <View style={styles.signBox}>
          {formStep === 3 ? null : (
            <>
              <TouchableOpacity
                style={styles.imgWrapper}
                onPress={() => handleSheetChanges(0)}>
                <Image
                  resizeMode="stretch"
                  source={{
                    uri: selectLocalFile?.path || IMAGEDEFAULT,
                  }}
                  style={styles.logoImage}
                />
                <View style={styles.iconImg}>
                  <Icon
                    type="Ionicons"
                    name="camera"
                    size={20}
                    S
                    color="#FFF"
                    style={{alignSelf: 'center', padding: 4}}
                  />
                </View>
              </TouchableOpacity>
            </>
          )}

          <View style={styles.form}>
            {formStep === 0 && (
              <>
                <Input
                  label="Full Name"
                  placeholder="Enter Full Name"
                  //! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'fullname', value: value});
                  }}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />

                <Input
                  label="Username"
                  placeholder="User Name"
                  //! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'username', value: value});
                  }}
                  // value={value}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  secureTextEntry
                  //! progress
                  onChangeText={value => {
                    onChangeForm({name: 'password', value: value});
                  }}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry(prev => !prev);
                      }}>
                      {isSecureEntry ? (
                        <Icon
                          type="Feather"
                          name="eye"
                          size={24}
                          color="#333"
                        />
                      ) : (
                        <Icon
                          type="Feather"
                          name="eye-off"
                          size={24}
                          color="#333"
                        />
                      )}
                    </TouchableOpacity>
                  }
                  iconPositon="right"
                />

                <Input
                  label="Comfirm Password "
                  placeholder="Comfirm Password"
                  secureTextEntry
                  //! progress
                  onChangeText={value => {
                    onChangeForm({name: 'password', value: value});
                  }}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry2(prev => !prev);
                      }}>
                      {isSecureEntry2 ? (
                        <Icon
                          type="Feather"
                          name="eye"
                          size={24}
                          color="#333"
                        />
                      ) : (
                        <Icon
                          type="Feather"
                          name="eye-off"
                          size={24}
                          color="#333"
                        />
                      )}
                    </TouchableOpacity>
                  }
                  iconPositon="right"
                />

                <Input
                  label="Home Country"
                  placeholder="Enter Your Country"
                  //! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'country', value: value});
                  }}
                  // value={value}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />
                <Input
                  label="Host Country "
                  placeholder="Host Country"
                  //! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'email', value: value});
                  }}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />
              </>
            )}

            {/*//! {step 2} */}
            {formStep === 1 && (
              <>
                <Input
                  label="Place of Stay "
                  placeholder="Place of Stay"
                  //! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'email', value: value});
                  }}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />

                <View>
                  <CustomDatePicker
                    datePickerOpen={datePickerOpen}
                    setDatePickerOpen={setDatePickerOpen}
                    date={date}
                    label="Birthday"
                    icon={
                      <Icon
                        type="FontAwesome"
                        name="calendar"
                        size={24}
                        color="#333"
                      />
                    }
                    iconPositon="right"
                  />
                </View>
                <Input
                  label="Gender "
                  placeholder="Host Country"
                  // ! coming to meet
                  onChangeText={value => {
                    onChangeForm({name: 'email', value: value});
                  }}
                  // icon={<Text>HIDE</Text>}
                  iconPositon="left"
                />
                {/* //!dropDown */}
{/* 
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  // setItems={setItems}
                  theme="DARK"
                  multiple={true}
                  mode="BADGE"
                  badgeDotColors={[
                    '#e76f51',
                    '#00b4d8',
                    '#e9c46a',
                    '#e76f51',
                    '#8ac926',
                    '#00b4d8',
                    '#e9c46a',
                  ]}
                /> */}

                {/* //!dropDown */}
              </>
            )}
            {/*//! {step 3} */}
            {formStep === 2 && (
              <>
                <CustomDatePicker
                  datePickerOpen={datePickerOpen}
                  setDatePickerOpen={setDatePickerOpen}
                  date={date}
                  label="Start Date of my expat journey"
                  icon={
                    <Icon
                      type="FontAwesome"
                      name="calendar"
                      size={24}
                      color="#333"
                    />
                  }
                  iconPositon="right"
                />
                <CustomDatePicker
                  datePickerOpen={datePickerOpen}
                  setDatePickerOpen={setDatePickerOpen}
                  date={date}
                  label="Expected end date of your stay"
                  icon={
                    <Icon
                      type="FontAwesome"
                      name="calendar"
                      size={24}
                      color="#333"
                    />
                  }
                  iconPositon="right"
                />

                <CustomSelectOption
                  label="What brought me to my host country"
                  options={options}
                />

                <CustomSelectOption label="My Interest" options={options} />
                <CustomSelectOption label="My Challenges" options={options} />
              </>
            )}
            {formStep === 3 && (
              <>
                <View style={styles.upload}>
                  <Text style={styles.title2}>Upload Documents</Text>

                  <View style={{paddingVertical: 20, paddingHorizontal: 100}}>
                    {/* <Icon
                      type="AntDesign"
                      name="check"
                      size={100}
                      color="#3376B9"
                    /> */}
                    <Image
                      resizeMode="cover"
                      source={require('../../assets/images/make.png')}
                      style={styles.logoImage2}
                    />
                  </View>
                  <View>
                    <Text style={styles.title2}>
                      Help Us Keep This Space Safe
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#8f92a1',
                      fontSize: 10,
                      textAlign: 'center',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Kindly submit your documents to make this a safe space for
                    everyone.Read our privacy policy to know more
                  </Text>
                </View>

                <View style={styles.form}>
                  <Input
                    label="Passport"
                    style={{color: '#333', fontFamily: 'Poppins-Regular'}}
                    placeholder="Username or Email"
                    onChangeText={value => {
                      onChangeForm({name: 'username', value});
                    }}
                    icon={<Text>{<Icon name="user" size={15} />}</Text>}
                    iconPositon="left"
                  />

                  <Input
                    label="Your Identity Proof"
                    placeholder="Password"
                    style={{color: '#333'}}
                  />
                </View>
              </>
            )}

            <CustomButton
              expat
              onPress={() => {
                completeNextForm();
                // navigate('verification');
              }}
              title="Next"
            />
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}>
                <Text style={styles.linkBtn}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose="true"
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <ImagePickerCrop onFileSelected={onFileSelected} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default RegisterComponent;
