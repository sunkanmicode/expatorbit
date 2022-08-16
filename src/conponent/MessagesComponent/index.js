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
import Icon from '../../conponent/CustomIcon/index'
import styles from './styles';
import Chat from '../../screens/Chat';

const MessagesComponent = ({isLoading, getMessages}) => {
  const {navigate} = useNavigation();

   console.log(getMessages, isLoading, 'getMessages500');
  // const newMessage = getMessages.map(r => r.messages);
  // console.log(newMessage, 'newMessage');

  // const renderItem = ({item}) => {
  //   console.log(item, 'item')
  //   return (
  //     // <Text styles={{color:'#333'}}>Hello</Text>
  //     <TouchableOpacity>
  //       <View style={styles.groupsGridBox}>
  //         <Image
  //           resizeMode="stretch"
  //           source={{uri: item?.sender_data?.user_avatars?.thumb}}
  //           style={styles.logoImage2}
  //         />
  //         <View style={styles.subGroupView}>
  //           <Text style={styles.subGroupTextTile}>{item?.sender_data?.sender_name}</Text>

  //           {/* <Text style={styles.subGroupText}>
  //             {item?.is_wp_admin ? 'Admin' : 'Member'}
  //           </Text> */}
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  const onPressHander = ()=>{
    navigation.navigate('Chat')
  }

  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/images/mess.png')}
        style={styles.logoImage}>
        <Container>
          <Text style={styles.searchText}>Messages</Text>
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

      <Container style={{paddingHorizontal: 1}}>
        {/* <View style={{paddingVertical: 100, paddingHorizontal: 100}}> */}
        {isLoading && <ActivityIndicator size="large" />}
        {/* </View> */}
        {!isLoading &&
          getMessages.map(m =>
            m.messages.map(k => (
              <TouchableOpacity
                key={k.id}
                style={styles.messContainer}
                onPress={() => {
                  navigate(Chat);
                }}>
                <View style={styles.groupsGridBox}>
                  <Image
                    resizeMode="stretch"
                    // source={require('../../assets/images/group.png')}
                    source={{uri: k?.sender_data?.user_avatars?.thumb}}
                    style={styles.logoImage2}
                  />
                  <View style={{paddingLeft: 10}}>
                    <View style={styles.subGroupView}>
                      <Text style={styles.subGroupTextTile}>
                        {k?.sender_data?.sender_name}
                      </Text>
                      {/* <Text style={{color: '#333'}}>{k?.display_date}</Text> */}
                    </View>
                    <Text style={styles.subGroupText}>{k?.message?.raw}</Text>
                  </View>
                </View>
                <Text style={{color: '#333'}}>
                  {k?.display_date}
                  <Icon name="right" type="AntDesign" color="#333" />
                </Text>
                {/* <Icon name="right" type="AntDesign" color="#333" /> */}
              </TouchableOpacity>
            )),
          )}
      </Container>
    </>
  );
};

export default MessagesComponent;
