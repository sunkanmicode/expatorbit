import {useNavigation} from '@react-navigation/native';
import React, {useState, useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
var moment = require('moment');
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import styles from './styles';
import CustomDatePicker from '../CustomDatePicker';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../CustomIcon';
import CustomSelectOption from '../CustomSelectOption';
import colors from '../../assets/themes/colors';
import ImagePickerCrop from '../bottomSheetContainer/ImagePicker';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const ProfileEditComp = () => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [localFile, setLocalFile] = useState(null);

  const [formStep, setFormStep] = useState(0);
  //   console.log(options, 'options')
  const {navigate} = useNavigation();


  const [isOpen, setIsOpen] = useState(false);
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

const onFileSelected = (image)=>{
    setIsOpen(false);
    setLocalFile(image);
    console.log(image, 'img')
}

console.log(localFile, '11111')


  const options = [
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'TypeScript', value: 'TypeScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
    {label: 'C++', value: 'C++'},
    {label: 'C', value: 'C'},
  ];

  const completeForm = () => {
    setFormStep(cur => cur + 1);
  };
  const completePrevForm = () => {
    if (formStep === 0) {
      return null;
    }
    setFormStep(cur => cur - 1);
  };

  return (
    <>
      {/* <Container> */}

      <GestureHandlerRootView
        style={[
          styles.BottomSheet,
          {backgroundColor: isOpen ? colors.grey : colors.white},
        ]}>
        <View style={styles.signUpWrapper}>
          <TouchableOpacity
            onPress={() => {
              completePrevForm();
            }}>
            <Icon type="AntDesign" name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.signUp}>Edit Profile</Text>
          <View />
        </View>
        <View style={styles.signBox}>
          {formStep === 3 ? null : (
            <>
              <TouchableOpacity
                style={styles.imgWrapper}
                onPress={() => handleSheetChanges(0)}>
                <Image
                  resizeMode="stretch"
                  source={{
                    uri: localFile?.path || IMAGEDEFAULT,
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
                //! coming to meet
                onChangeText={value => {
                  onChangeForm({name: 'email', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
              />
            </>
          )}
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

                <View style={{paddingVertical: 70, paddingHorizontal: 100}}>
                  <Icon
                    type="AntDesign"
                    name="check"
                    size={100}
                    color="#3376B9"
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
                  }}>
                  Kindly submit your documents to make this a safe space for
                  everyone.Read our privacy policy to know more
                </Text>
              </View>

              <View style={styles.form}>
                <Input
                  label="Passport"
                  style={{color: '#333'}}
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
              completeForm();
              // navigate('verification');
            }}
            title="Next"
          />
        </View>
        {isOpen && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}>
            <BottomSheetView>
              <ImagePickerCrop onFileSelected={onFileSelected} />
            </BottomSheetView>
          </BottomSheet>
        )}
      </GestureHandlerRootView>
      {/* </Container> */}
    </>
  );
};

export default ProfileEditComp;
