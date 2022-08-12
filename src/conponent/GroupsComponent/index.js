import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Container from '../../conponent/Container';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import {FORGOTPASSWORD, REGISTER} from '../../constants/routeNames';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';




const GroupsComponent = ({ data, loading }) => {
  const {navigate} = useNavigation();

  const renderItem = ({item}) => {
    // console.log(item, 'item');
    return (
      <>
        <TouchableOpacity style={styles.groupsGridBox}>
          {item.cover_url ? (
            <Image
              resizeMode="stretch"
              source={{uri: item.cover_url}}
              style={styles.logoImage2}
            />
          ) : (
            <Text style={{width: 45, height: 45, backgroundColor: '#444'}}>
              {null}
            </Text>
          )}
          <Text style={styles.subGroupTextTile}>{item.name}</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>
              {item.status}/{item.report_type}
            </Text>
            <Text style={styles.subGroupText}>
              {item.members_count} members
            </Text>
          </View>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>{item.report_button_text}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </>
    );
  };

  

  return (
    <>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/images/group.png')}
          style={styles.logoImage}>
          <Container>
            <Text style={styles.searchText}>Groups</Text>
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
            <Text style={{color: '#adb5bd'}}>All Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupsBtn}>
            <Text style={{color: '#adb5bd'}}>Recently Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupsBtn}>
            <Text style={{color: '#adb5bd'}}>All Expats</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 0}}>
          {/* <View style={{paddingVertical: 100, paddingHorizontal: 100}}> */}
          {loading && <ActivityIndicator size="large" />}
          {/* </View> */}

          {!loading && (
            <FlatList
              data={data}
              renderItem={renderItem}
              numColumns={2}
              // ListEmptyComponent={}
              keyExtractor={item => String(item.id)}
            />
          )}
        </View>
    </>
  );
};

export default GroupsComponent;


{/* <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/images/group.png')}
        style={styles.logoImage}>
        <Container>
          <Text style={styles.searchText}>Groups</Text>
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
      </ImageBackground> */}
      {/* <Container>
      <View style={styles.groupsTitle}>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={{color: '#adb5bd'}}>All Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={{color: '#adb5bd'}}>Recently Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.groupsBtn}>
          <Text style={{color: '#adb5bd'}}>All Expats</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.groupsgrid}>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupsgrid}>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupsgrid}>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupsGridBox}>
          <Image
            resizeMode="stretch"
            source={require('../../assets/images/groupImg.png')}
            style={styles.logoImage2}
          />
          <Text style={styles.subGroupTextTile}>FWH Group Live..</Text>
          <View style={styles.subGroupView}>
            <Text style={styles.subGroupText}>Public/Group </Text>
            <Text style={styles.subGroupText}>4 members</Text>
          </View>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Text}>Organizer</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Container> */}
