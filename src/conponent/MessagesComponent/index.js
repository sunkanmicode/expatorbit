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
  ScrollView,
  Pressable,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Container from '../../conponent/Container';
import Icon from '../../conponent/CustomIcon/index'
import styles from './styles';
import Chat from '../../screens/Chat';
import colors from '../../assets/themes/colors';

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
    <ScrollView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Icon
            type="MaterialIcons"
            size={20}
            name="arrow-back-ios"
            color="#333"
          />
          <Text style={{color: '#333', fontSize: 20}}>Members</Text>
        </View>
      </View>

      <Container style={{paddingHorizontal: 1}}>
        <Menu>
          {/* <MenuTrigger
            triggerOnLongPress={true}
            customStyles={{
              TriggerTouchableComponent: TouchableOpacity,
            }}
            onLongPress={() => {
              console.log('click');
            }}>
            <View>
              <Text style={{color: '#333'}}>open text</Text>
              <Text style={{color: '#333'}}>open text</Text>
              <Text style={{color: '#333'}}>open text</Text>
            </View>
          </MenuTrigger> */}

          {/* <MenuOptions>
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`save`)}>
              <Text style={{color: 'red'}}>Save</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Move`)}>
              <Text style={{color: 'red'}}>Move</Text>
            </MenuOption>
          </MenuOptions> */}
          <MenuTrigger
            triggerOnLongPress={true}
            // onAlternativeAction={true}
            customStyles={{
              TriggerTouchableComponent: TouchableOpacity,
            }}
            onLongPress={() => {
              console.log('click');
            }}>
            <View style={styles.messageTitle}>
              <View>
                <Image
                  source={require('../../assets/images/inviteLogo.png')}
                  style={styles.logoImage}
                />
              </View>
              <View style={styles.messageText}>
                <Text style={styles.textTitle1}>Fun with Hindi</Text>
                <Text style={styles.textTitle2}>
                  Hanna expat orbit is added to group
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: colors.grey, marginHorizontal: 5}}>
                  19/10/22
                </Text>
                <Icon
                  name="right"
                  type="AntDesign"
                  size={15}
                  color={colors.grey}
                />
              </View>
            </View>
          </MenuTrigger>
            <MenuOptions style={styles.popupWrapper}>
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{color: '#333'}}>Report</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`save`)}>
                <Text style={{color: '#333'}}>Block</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Move`)}>
                <Text style={{color: 'red'}}>Delete conversion</Text>
              </MenuOption>
            </MenuOptions>
          
        </Menu>
      </Container>
    </ScrollView>
  );
};

export default MessagesComponent;
