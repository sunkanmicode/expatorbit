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
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import CustomDatePicker from '../CustomDatePicker';
import CustomSelectOption from '../CustomSelectOption';
import Icon from '../CustomIcon';

const RegisterComponent = ({
  form,
  errors,
  onChangeForm,
  onSubmit,
  datePickerOpen,
  setDatePickerOpen,
  date,
  options,
  options2,
  options3
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);
  const [formStep, setFormStep] = useState(0);
  const {navigate} = useNavigation();

  const completeNextForm = () => {
    setFormStep(cur => cur + 1);
  };
   const completePrevForm = () => {
    if(formStep < 0){
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

  return (
    <>
      <View style={styles.signUpWrapper}>
        <TouchableOpacity onPress={()=>{
          completePrevForm()
        }}>
          <Icon type="AntDesign" name="arrowleft" size={24} color="#333"  />
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
              <View style={styles.imgWrapper}>
                <Image
                  resizeMode="stretch"
                  source={require('../../assets/images/user.png')}
                  style={styles.logoImage}
                />
              </View>
              <Text style={styles.imgIcon}>Icon</Text>
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

                <CustomSelectOption 
                  label="My Interest" 
                  options={options} 
                  />
                <CustomSelectOption 
                label="My Challenges" 
                options={options} 
                /> 
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
    </>
  );
};

export default RegisterComponent;
