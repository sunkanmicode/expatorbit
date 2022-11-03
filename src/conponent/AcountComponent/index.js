import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from '../../conponent/CustomIcon';
import colors from '../../assets/themes/colors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Profile from '../../screens/Profile';

const AccountComponent = ({navigation, item, loading, getUser_Id}) => {
  const {navigate} = useNavigation();
  console.log(getUser_Id?.member_rest?.avatar.full, 'getUser_Id7889');


  const categories = [
    {
      icon: (
        <Icon
          type="MaterialIcons"
          name="dashboard"
          color={colors.expat}
          size={15}
        />
      ),
      name: 'My Courses',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: (
        <Icon
          type="MaterialIcons"
          name="group"
          color={colors.expat}
          size={15}
        />
      ),
      name: 'My Groups',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: (
        <Icon
          type="Octicons"
          name="comment-discussion"
          size={15}
          color={colors.expat}
        />
      ),
      name: 'My Discussions',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: (
        <Icon type="AntDesign" name="setting" size={15} color={colors.expat} />
      ),
      name: 'Settings',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: (
        <Icon type="Feather" name="bookmark" size={15} color={colors.expat} />
      ),
      name: 'Bookmarks',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
  ];

  const secondCategories = [
    {
      icon: (
        <Icon
          type="MaterialIcons"
          name="policy"
          color={colors.expat}
          size={15}
        />
      ),
      name: 'Privacy policy',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: (
        <Icon
          type="Ionicons"
          name="bug-outline"
          color={colors.expat}
          size={15}
        />
      ),
      name: 'Report a Bug',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
    {
      icon: <Icon type="MaterialIcons" name="logout" size={15} color="red" />,
      name: 'Log out',
      onPress: () => {},
      arrorIcon: (
        <Icon
          type="MaterialIcons"
          name="keyboard-arrow-right"
          size={20}
          color="#333"
        />
      ),
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.accountTitle}>My Account</Text>
      <TouchableOpacity
        style={styles.accountProfile}
        onPress={() => {
          // navigate('Profile', {item});
          navigate('ProfileStack', {item});
        }}>
        <View style={styles.acountImg}>
          <Image
            resizeMode="stretch"
            source={{uri: getUser_Id?.member_rest?.avatar?.full}}
            style={styles.logoImage}
          />
          <Text
            style={{
              color: '#333',
              marginHorizontal: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            View Profile
          </Text>
        </View>
        <View>
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-right"
            size={25}
            color="#333"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.category}>
        {categories.map((category, index) => (
          <>
            <TouchableOpacity key={index} style={styles.categoryList}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {category.icon}
                <View style={{marginHorizontal: 10}}>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 15,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {category.name}
                  </Text>
                </View>
              </View>
              <View>{category.arrorIcon}</View>
            </TouchableOpacity>
            <View style={styles.footerSeparator} />
          </>
        ))}
      </View>
      <View style={styles.category2}>
        {secondCategories.map((category, index) => (
          <>
            <TouchableOpacity key={index} style={styles.categoryList2}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {category.icon}
                <View style={{marginHorizontal: 10}}>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 15,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {category.name}
                  </Text>
                </View>
              </View>
              <View>{category.arrorIcon}</View>
            </TouchableOpacity>
            <View style={styles.footerSeparator} />
          </>
        ))}
      </View>
    </View>
  );
};

export default AccountComponent;
