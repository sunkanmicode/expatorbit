import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
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
import Icon from '../../conponent/CustomIcon';

import styles from './styles';

const RequestInvite = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [userDismissed, setUserDismissed] = useState(false);
  const [form, setForm] = useState({});



    const onChangeForm = ({name, value}) => {
      setForm({...form, [name]: value});
      // console.log(form.username, form.password, 'form');
    };

    const onSubmit = () => {
      console.log(form, 'form');
      // if (form.username && form.password) {
      //   loginUser(form)(authDispatch);
      //   // getUserId();
      // }
    };

   

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.headerTitle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            type="SimpleLineIcons"
            name="arrow-left"
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        <Text style={{color: '#333'}}>Request Invite</Text>
        <View />
      </View>

      <View style={styles.signBox}>
        <Image
          source={require('../../assets/images/inviteLogo.png')}
          style={styles.logoImage}
        />

        <View style={styles.form}>
          <Input
            label="Name"
            style={{color: '#333'}}
            placeholder="Name"
            onChangeText={value => {
              onChangeForm({name: 'name', value});
            }}
            // icon={<Text>{<Icon name="user" size={15} color='#333' />}</Text>}
            iconPositon="left"
          />
          <Input
            label="Email"
            style={{color: '#333'}}
            placeholder="email"
            onChangeText={value => {
              onChangeForm({name: 'email', value});
            }}
            // icon={<Text>{<Icon name="user" size={15} color='#333' />}</Text>}
            iconPositon="left"
          />

          <Input
            label="Phone Number"
            placeholder="phoneNumber"
            style={{color: '#333'}}
            // secureTextEntry={isSecureEntry}
            onChangeText={value => {
              onChangeForm({name: 'phoneNumber', value});
            }}
            // icon={
            //   <TouchableOpacity
            //     onPress={() => {
            //       setIsSecureEntry(prev => !prev);
            //     }}>
            //     <Text>{isSecureEntry ? 'show' : 'hide'}</Text>
            //   </TouchableOpacity>
            // }
            // iconPositon="right"
          />
          <Input
            label="Home Country"
            style={{color: '#333'}}
            placeholder="Home Country"
            onChangeText={value => {
              onChangeForm({name: 'homeCountry', value});
            }}
            // icon={<Text>{<Icon name="user" size={15} color='#333' />}</Text>}
            iconPositon="left"
          />
          <Input
            label="How did you learn about Expat Orbit app"
            style={{color: '#333'}}
            placeholder="Type here"
            onChangeText={value => {
              onChangeForm({name: 'learnAbout', value});
            }}
            // icon={<Text>{<Icon name="user" size={15} color='#333' />}</Text>}
            iconPositon="left"
          />

          <CustomButton
            expat
            // onPress={submitData}
            onPress={onSubmit}
            title="Submit"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestInvite;















