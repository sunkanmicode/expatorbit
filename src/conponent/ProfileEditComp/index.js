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

const ProfileEditComp = ({getProfile,onChange, form, navigation}) => {
  const {navigate} = useNavigation();

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [localFile, setLocalFile] = useState(null);

  const [formStep, setFormStep] = useState(0);
  //   console.log(options, 'options')

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

  const onFileSelected = image => {
    setIsOpen(false);
    setLocalFile(image);
    console.log(image, 'img');
  };

  console.log(localFile, '11111');

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
      return navigation.goBack();
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
                    uri:
                      getProfile?.avatar_urls?.full ||
                      localFile ||
                      localFile?.path,
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
                style={{color: '#333'}}
                value={getProfile?.name}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'name', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
              />

              <Input
                label="Username"
                placeholder="User Name"
                style={{color: '#333'}}
                value={getProfile.user_login}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'user_login', value: value});
                }}
                // value={value}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
              />
              <Input
                label="Home Country"
                placeholder="Enter Your Country"
                style={{color: '#333'}}
                value={getProfile?.xprofile?.groups[1]?.fields[36]?.value?.raw}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'country', value: value});
                }}
                // value={value}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
              />
              <Input
                label="Host Country "
                placeholder="Host Country"
                style={{color: '#333'}}
                value={getProfile?.xprofile?.groups[6]?.fields[86]?.value?.raw}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'HostCountry', value: value});
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
                style={{color: '#333'}}
                value={getProfile?.xprofile?.groups[6]?.fields[86]?.value?.raw}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'placeOfStay', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
              />

              <View>
                <CustomDatePicker
                  datePickerOpen={datePickerOpen}
                  setDatePickerOpen={setDatePickerOpen}
                  date={date}
                  // value={moment(
                  //   getProfile?.xprofile?.groups[6]?.fields[85]?.value?.raw,
                  // ).format('MMMM Do YYYY')}
                  value={
                    getProfile?.xprofile?.groups[6]?.fields[85]?.value?.raw
                  }
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
                placeholder="Gender"
                style={{color: '#333'}}
                value={getProfile?.xprofile?.groups[6]?.fields[88]?.value?.raw}
                //! coming to meet
                onChangeText={value => {
                  onChange({name: 'gender', value: value});
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
                value={getProfile?.xprofile?.groups[3]?.fields[46]?.value?.raw}
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
                value={getProfile?.xprofile?.groups[3]?.fields[47]?.value?.raw}
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
                selectedValue={
                  getProfile?.xprofile?.groups[3]?.fields[51]?.value?.raw
                }
                value={getProfile?.xprofile?.groups[3]?.fields[51]?.value?.raw}
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
