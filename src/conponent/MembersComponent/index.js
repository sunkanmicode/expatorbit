import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { PROFILE } from '../../constants/routeNames';

const MembersComponent  = ({isLoading, getMembers ,navigation, route}) => {
  const {navigate} = useNavigation();

  //  console.log(route, ' route');
  //  const handleChange =()=>{
  //   navigation.navigate(PROFILE, {id})
  //  }

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>{
        navigate(PROFILE, {item});
      }}>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={{uri: item?.avatar_urls?.thumb}}
            style={styles.logoImage2}
          />
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupTextTile}>{item?.name}</Text>

            <Text style={styles.subGroupText}>
              {item?.is_wp_admin ? 'Admin' : 'Member'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }




  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/images/members.png')}
        style={styles.logoImage}>
        <Container>
          <Text style={styles.searchText}>Members</Text>
          <View style={styles.searchWrapper}>
            <Input
              placeholder="Search"
              style={styles.InputSearch}
              iconPositon="right"
              icon={
                <Text style={styles.icon}>
                  {<Icon name="search" size={15} />}
                </Text>
              }
            />
          </View>
        </Container>
      </ImageBackground>
      <View style={styles.groupsTitle}>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={styles.groupsText}>All Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={styles.groupsText}>Recently Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={styles.groupsText}>All Expats</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 0}}>
        {/* <View style={{paddingVertical: 100, paddingHorizontal: 100}}> */}
        {isLoading && <ActivityIndicator size="large" />}
        {/* </View> */}

        {!isLoading && (
          <FlatList
            data={getMembers}
            renderItem={renderItem}
            // numColumns={2}
            // ListEmptyComponent={}
            keyExtractor={item => String(item.id)}
          />
        )}
      </View>
    </>
  );
};

export default MembersComponent;

