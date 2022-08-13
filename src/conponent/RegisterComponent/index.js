import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
var moment = require('moment');
import DateTimePicker from '@react-native-community/datetimepicker';
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import CustomDatePicker from '../CustomDatePicker';

const RegisterComponent = ({
  form,
  errors,
  onChangeForm,
  onSubmit,
  datePickerOpen,
  setDatePickerOpen,
  date,
}) => {
  

  const [formStep, setFormStep] = useState(0);

  const {navigate} = useNavigation();

  const completeForm = () => {
    setFormStep(cur => cur + 1);
  };

  // const submitButtom = ()=>{
  //   if(formStep > 2){
  //     return ()
  //   }
  // }

  return (
    <Container>
      <View style={styles.signUpWrapper}>
        <Text style={{color: '#333'}}>Icon</Text>
        <Text style={styles.signUp}>Sign up</Text>
        <View />
      </View>

      <View style={styles.signBox}>
        <View style={styles.imgWrapper}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/user.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.imgIcon}>Icon</Text>

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
                icon={<Text>show</Text>}
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
                icon={<Text>show</Text>}
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
                  icon={<Text style={{color: '#333'}}>HIDE</Text>}
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
          {/*//! {step 3} */}
          {formStep === 2 && (
            <>
              <CustomDatePicker
                datePickerOpen={datePickerOpen}
                setDatePickerOpen={setDatePickerOpen}
                date={date}
                label="Start Date of my expat journey"
                icon={<Text style={{color: '#333'}}>HIDE</Text>}
                iconPositon="right"
              />
              <CustomDatePicker
                datePickerOpen={datePickerOpen}
                setDatePickerOpen={setDatePickerOpen}
                date={date}
                label="Expected end date of your stay"
                icon={<Text style={{color: '#333'}}>HIDE</Text>}
                iconPositon="right"
              />

              
              <Input
                label="What brought me to my host country "
                // placeholder="Host Country"
                //! coming to meet
                onChangeText={value => {
                  onChangeForm({name: 'email', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
                error={errors.email}
              />
              <Input
                label="My Interests "
                // placeholder="Host Country"
                //! coming to meet
                onChangeText={value => {
                  onChangeForm({name: 'email', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
                error={errors.email}
              />
              <Input
                label="My Challenges "
                // placeholder="Host Country"
                //! coming to meet
                onChangeText={value => {
                  onChangeForm({name: 'email', value: value});
                }}
                // icon={<Text>HIDE</Text>}
                iconPositon="left"
                error={errors.email}
              />
            </>
          )}

          <CustomButton primary onPress={completeForm} title="Next" />
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
  );
};

export default RegisterComponent;
