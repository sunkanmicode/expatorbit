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
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import {LOGIN, REGISTER} from '../../constants/routeNames';
import styles from './styles';

const ForgotPassword = ({form, errors, onChangeForm, onSubmit}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      /> */}
      <View style={styles.signBox}>
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.subtitle}>Enter your email to recover password</Text>

        <View style={styles.form}>
          <Input
            label="Email Address"
            placeholder="john@example.com"
            onChangeText={value => {
              onChangeForm({name: 'username', value});
            }}
            // icon={<Text>HIDE</Text>}
            iconPositon="left"
            // error={errors.username}
          />

          <CustomButton primary onPress={onSubmit} title="Sign Up" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.createSection}>
            <TouchableOpacity
            //   onPress={() => {
            //     navigate(REGISTER);
            //   }}
            >
              <Text style={styles.linkBtn}>Terms Of Service</Text>
            </TouchableOpacity>
            <Text style={styles.infoText2}>and</Text>
            <TouchableOpacity
            //   onPress={() => {
            //     navigate(REGISTER);
            //   }}
            >
              <Text style={styles.linkBtn}>Privacy Policy</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Container>
  );
};

export default ForgotPassword;
