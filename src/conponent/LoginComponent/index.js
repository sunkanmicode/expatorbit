import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';

const LoginComponent = () => {
//   const [value, onChangeText] = useState('');
const {navigate} = useNavigation()

  return (
    <Container>
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      /> */}
      <View style={styles.signBox}>
        <Text style={styles.title}>Sign in</Text>

        <View style={styles.form}>
          <Input
            label="UserName"
            placeholder="Username or Email"
            //! coming to meet
            // onChangeText={text => onChangeText(text)}
            // value={value}
            // icon={<Text>HIDE</Text>}
            iconPositon="left"
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Password"
            secureTextEntry
            //! progress
            // onChangeText={text => onChangeText(text)}
            // value={value}
            icon={<Text>show</Text>}
            iconPositon="right"
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton primary title="Login" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createSection}>
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
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
