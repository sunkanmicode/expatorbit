import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import {FORGOTPASSWORD, REGISTER} from '../../constants/routeNames';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import axios from 'axios';
import CustomMessage from '../CustomMessage';

const LoginComponent = ({form, errors, loading, error, onChangeForm, onSubmit}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [userDismissed, setUserDismissed] = useState(false);

   

  return (
    <Container>
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      /> */}
      <View style={styles.signBox}>
        <Text style={styles.title}>Sign in</Text>

        {error && !error?.error && (
          <CustomMessage
            retry
            onDismiss={() => {}}
            retryFn={() => {
              console.log('hello', hello);
            }}
            danger
            message="invalid credentials"
          />
        )}

        {error?.error && (
          <CustomMessage
            // retry
            onDismiss={() => {}}
            // retryFn={() => {
            //   console.log('hello', hello);
            // }}
            danger
            message={error?.error}
          />
        )}

        <View style={styles.form}>
          <Input
            label="UserName"
            style={{color: '#333'}}
            placeholder="Username or Email"
            onChangeText={value => {
              onChangeForm({name: 'username', value});
            }}
            // icon={<Text>{<Icon name="user" size={15} />}</Text>}
            iconPositon="left"
          />
          {console.log(error, 'error600')}

          <Input
            label="Password"
            placeholder="Password"
            style={{color: '#333'}}
            secureTextEntry={isSecureEntry}
            onChangeText={value => {
              onChangeForm({name: 'password', value});
            }}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'show' : 'hide'}</Text>
              </TouchableOpacity>
            }
            iconPositon="right"
          />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {
              navigate(FORGOTPASSWORD);
            }}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton
            primary
            loading={loading}
            disabled={loading}
            // onPress={submitData}
            onPress={onSubmit}
            title="Login"
          />
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
