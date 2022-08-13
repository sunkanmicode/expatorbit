

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../conponent/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useRoute} from '@react-navigation/native';


const ProfileComponent = ({getUser_Id, loading, getProfile, profile, navigation}) => {
  const {navigate} = useNavigation();



  return (
    <>
      {/* {loading && <ActivityIndicator size="large" />} */}
      {/* {!loading && ( */}
      <Container>
        {/* <Image
            resizeMode="stretch"
            source={{uri: profile?.avatar_urls?.thumb}}
            style={styles.logoImage}
          /> */}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}
          onPress={() => {
            navigate('members');
          }}>
          <Icon2
            name="arrowleft"
            color="#333"
            size={30}
            // style={styles.profileIcon}
          />
          <Text style={{color: '#333', marginLeft: 10}}>Back</Text>
        </TouchableOpacity>
        <View style={styles.signBox}>
          <Text style={styles.subtitle}>{profile?.name}</Text>
          <View style={styles.mutiStepForm}>
            <View style={styles.singleStepBox}>
              <TouchableOpacity>
                <Text style={styles.mutiStepText}>
                  @{profile?.profile_name}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.singleStepBox}>
              <TouchableOpacity>
                <Text style={styles.mutiStepText}>
                  {/* {getProfile.registered_date} */}
                  {moment(profile?.registered_date).format('MMMM Do YYYY')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.profileIconBox}>
            <Icon
              name="users"
              color="#FF751899"
              size={30}
              style={styles.profileIcon}
            />
            <Text style={styles.profileIconText}>
              {profile?.points?.point} invites
            </Text>
          </View>
          <View style={styles.mutiStepForm}>
            <View style={styles.singleStepBox}>
              <TouchableOpacity>
                <View style={styles.followers}>
                  <View>
                    <Text style={styles.profileIconText}>
                      {profile?.followers}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.mutiStepText}>Followers</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.singleStepBox}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.profileIconText}>
                    {profile?.following}
                  </Text>
                  <Text style={styles.mutiStepText}>Following</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.subTextTile}>
          <View>
            <Text style={styles.aboutMeTitle}>About me</Text>
          </View>
          <View>
            <Text style={styles.aboutMeTitle}>Personal Details</Text>
          </View>
          <View>
            <Text style={styles.aboutMeTitle}>My Expat Jounrey</Text>
          </View>
        </View>
        <View style={styles.signBox}>
          <View style={styles.aboutMe}>
            <Text style={styles.aboutMeTextTitle}>
              {profile?.xprofile?.groups[1]?.fields[1]?.name}
            </Text>
            <Text style={{color: '#333'}}>
              {/* {getProfile?.xprofile?.groups?.value?.raw} */}
              {profile?.xprofile?.groups[1]?.fields[1]?.value?.raw}
            </Text>
          </View>
          <View style={styles.aboutMe}>
            <Text style={styles.aboutMeTextTitle}>
              {profile?.xprofile?.groups[1]?.fields[3]?.name}
            </Text>
            <Text style={{color: '#333'}}>
              {profile?.xprofile?.groups[1]?.fields[3]?.value?.raw}
            </Text>
          </View>

          <View style={styles.aboutMe}>
            {!profile?.xprofile?.groups[1]?.fields[36]?.name &&
            !profile?.xprofile?.groups[1]?.fields[36]?.value?.raw ? (
              <Text style={{color: '#333'}}>No Avaliable data</Text>
            ) : (
              <>
                <Text style={styles.aboutMeTextTitle}>
                  {profile?.xprofile?.groups[1]?.fields[36]?.name}
                </Text>
                <Text style={{color: '#333'}}>
                  {profile?.xprofile?.groups[1]?.fields[36]?.value?.raw}
                </Text>
              </>
            )}
          </View>
          <View style={styles.aboutMe}>
            {!profile?.xprofile?.groups[1]?.fields[20]?.name &&
            !profile?.xprofile?.groups[1]?.fields[20]?.value?.raw ? (
              <Text style={{color: '#333'}}>No Avaliable data</Text>
            ) : (
              <>
                <Text style={styles.aboutMeTextTitle}>
                  {profile?.xprofile?.groups[1]?.fields[20]?.name}
                </Text>
                <Text style={{color: '#333'}}>
                  {profile?.xprofile?.groups[1]?.fields[20]?.value?.raw}
                </Text>
              </>
            )}
          </View>
        </View>
      </Container>
      {/* // )} */}
    </>
  );
};

export default ProfileComponent;
 

