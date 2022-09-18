import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import colors from '../../assets/themes/colors';
import Input from '../../conponent/Input'
import CustomButton from '../../conponent/CustomButton';
   import Share from 'react-native-share';
import styles from './styles'

const Invite = () => {
  const {navigate} = useNavigation();

  const shareLink = async ()=>{
    const shareOption = {
      message:'please share your link'
    }
    try {
      const shareResponse = await Share.open(shareOption);
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log(error, 'error')
      
    }
  }

  

  return (
    <View style={styles.wrapper}>
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      /> */}
      <View style={styles.signBox}>
        <Text
          style={{
            color: colors.expat,
            alignSelf: 'center',
            fontFamily: 'Poppins-Regular',
          }}>
          Invite
        </Text>
        <View>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/invite.png')}
            style={styles.logoImage}
          />
        </View>
        <View>
          <Text
            style={{
              color: colors.expat,
              alignSelf: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Gift App Access Your Expat Friends
          </Text>
          <Text
            style={{
              color: colors.grey,
              alignSelf: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            To 5 special expats at a time using this invite code
          </Text>
        </View>
        <View>
          <Input value="67XER12HK" style={{color: colors.grey}} />
        </View>
        <View>
          <CustomButton
            onPress={shareLink}
            primary
            title="Send Invite"
          />
        </View>
        <View>
          <Text style={{color: colors.black}}>How It Works</Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 9,
              fontFamily: 'Poppins-Regular',
            }}>
            1. You can share one invite code to 5 expat friends
          </Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 9,
              fontFamily: 'Poppins-Regular',
            }}>
            2. Your invite code gets renewed in one week
          </Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 9,
              fontFamily: 'Poppins-Regular',
            }}>
            3. Your friend must click on the link and and accept the invite
          </Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 9,
              fontFamily: 'Poppins-Regular',
            }}>
            4. You get special credits which can be used for purchasing courses
            or booking a consultation with expats
          </Text>
        </View>
      </View>
     
    </View>
  );
};

export default Invite;
