import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../CustomIcon';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import styles from './styles';
import colors from '../../assets/themes/colors';
import ViewProfileList from '../bottomSheetContainer/ViewProfileList';
import CustomModel from '../CustomModel';
import moment from 'moment';
import CustomBottomSheet from '../bottomSheetContainer/CustomBottomSheet';
// import {useRoute} from '@react-navigation/native';

const ViewMemberComponent = ({
  viewMember,
  navigation,
  sheetRef,
  openSheet,
  closeSheet,
  modelVisible,
  setModelVisible,
  modelVisible2,
  setModelVisible2,
  modelVisible3,
  setModelVisible3,
  openRemoveConnection,
  show2,
  setShow2,
}) => {
  const {navigate} = useNavigation();
  const [categoriesIndex, setCategoriesIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
 
  // console.log(viewMember, 'ViewMember');

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['20%'];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    // console.log("handleSheetChanges", index);
  }, []);

  const categories = [
    {name: 'Connect', onPress: () => {}},
    // {name: 'Follow', onPress: () => {}},
    {name: 'Message', onPress: () => {}},
    {
      name: (
        <Icon type="Feather" name="more-horizontal" color="#333" size={15} />
      ),
      onPress: () => {
        // handleSheetChanges(0);
        openSheet();
        setShow2(false)
      },
    },
  ];

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              item.onPress(), setCategoriesIndex(index);
            }}>
            <Text
              style={[
                styles.categoryTest,
                categoriesIndex === index && styles.categoryTestSelected,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const timeline = [
    {
      uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22',
      title: 'Expat Orbit',
      subTitle: 'lorem lorem lorem lorem',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam',
    },
    {
      uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=B0E33EF4',
      title: 'Expat Orbit',
      subTitle: 'lorem lorem lorem lorem',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam',
    },
    {
      uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=B0E33EF4/5',
      title: 'Expat Orbit',
      subTitle: 'lorem lorem lorem lorem',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam Quibusdam',
    },
  ];

  const data = [
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/7',
    },
  ];

  const documents = [
    {
      icon: 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A',
    },
    {
      icon: 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A',
    },
  ];

  return (
    <>
      <CustomModel
        modelVisible={modelVisible2}
        setModelVisible={setModelVisible2}
        title="Connection removed"
        textFooter="Ok"
        // title2='Has been update'
      />

      <CustomModel
        modelVisible={modelVisible3}
        setModelVisible={setModelVisible3}
        title="Member blocked"
        title2="Go to settings to unblock"
        textFooter="Ok"
      />

      <ScrollView
        style={[
          styles.container,
          {backgroundColor: isOpen ? '#333' : colors.white},
        ]}>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <TouchableOpacity
              onPress={() => {
                navigate.goBack();
              }}>
              <Icon
                type="MaterialIcons"
                // style={styles.playIcon}
                name="keyboard-arrow-left"
                size={25}
                color="#6d6e71"
              />
            </TouchableOpacity>
            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              Profile
            </Text>
            <View />
          </View>
          <View style={{padding: 0}}>
            <Image
              source={{uri: viewMember?.avatar_urls?.full}}
              style={styles.profileImg}
            />
            <View style={styles.admin}>
              <Text style={{color: '#3376B9', fontFamily: 'Poppins-Regular'}}>
                {viewMember?.is_wp_admin ? 'ADMIN' : 'MEMBER'}
              </Text>
            </View>
          </View>
          <View style={styles.headerText}>
            <Text
              style={{
                color: '#333',
                fontSize: 20,
                alignSelf: 'center',
                fontFamily: 'Poppins-Regular',
              }}>
              {viewMember?.name}
            </Text>
            <View style={styles.headerText2}>
              <Text style={{color: '#8f92a1', fontFamily: 'Poppins-Regular'}}>
                @{viewMember?.profile_name}
              </Text>
              <View
                style={{
                  margin: 5,
                  backgroundColor: '#8f92a1',
                  borderRadius: 100,
                  width: 10,
                  height: 10,
                }}
              />
              <Text style={{color: '#8f92a1', fontFamily: 'Poppins-Regular'}}>
                {moment(viewMember?.registered_date).format('MMMM Do YYYY')}
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#8f92a1',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Regular',
                }}>
                About the person...
              </Text>
            </TouchableOpacity>
          </View>

          <CategoryList />
        </View>
        <View style={{marginVertical: 10}} />
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.personalInfo}>
            <Icon name="home" size={15} color="#8f92a1" />
            <Text
              style={{
                color: '#8f92a1',
                marginHorizontal: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Lives in
            </Text>
            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              {/* Norib, India */}
              {viewMember?.xprofile?.groups[1]?.fields[36]?.value?.raw}
            </Text>
          </View>
          <View style={styles.personalInfo}>
            <Icon type="Entypo" name="location" size={15} color="#8f92a1" />
            <Text style={{color: '#8f92a1', marginHorizontal: 10}}>From</Text>
            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              {!viewMember?.xprofile?.groups[1]?.fields[36]?.value?.raw
                ? null
                : viewMember?.xprofile?.groups[1]?.fields[36]?.value?.raw}
            </Text>
          </View>
          <View style={styles.personalInfo}>
            <Icon name="birthday-cake" size={15} color="#8f92a1" />
            <Text
              style={{
                color: '#8f92a1',
                marginHorizontal: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Birthday
            </Text>
            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              {!viewMember?.xprofile?.groups[6]?.fields
                ? null
                : viewMember?.xprofile?.groups[6]?.fields[85]?.value?.raw
                ? moment(
                    viewMember?.xprofile?.groups[6]?.fields[85]?.value?.raw,
                  ).format('MMMM Do YYYY')
                : null}
            </Text>
          </View>

          <View style={styles.personalInfo}>
            <Icon
              type="Ionicons"
              name="male-female"
              size={15}
              color="#8f92a1"
            />
            {/* <Text style={{color: '#8f92a1', marginHorizontal: 10}}>
              Lives in
            </Text> */}
            <Text
              style={{
                color: '#333',
                marginHorizontal: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              {!viewMember?.xprofile?.groups[6]?.fields
                ? null
                : viewMember?.xprofile?.groups[6]?.fields[88]?.value?.raw
                ? 'Male'
                : null}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowAboutMe(!showAboutMe);
            }}>
            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              ...see your about me
            </Text>
          </TouchableOpacity>
        </View>
        {showAboutMe && (
          <>
            <View style={styles.footerSeparator} />

            <View style={styles.expatJourney}>
              <Text style={styles.timelineText}>My Expat journey</Text>
              <View style={styles.expatLocation}>
                <View style={{alignItems: 'center'}}>
                  <Icon
                    type="Entypo"
                    name="location-pin"
                    size={20}
                    color="red"
                  />
                  <Text
                    style={{
                      color: 'grey',
                      width: 70,
                      textAlign: 'center',
                      fontSize: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {!viewMember?.xprofile?.groups[3]?.fields
                      ? null
                      : moment(
                          viewMember?.xprofile?.groups[3]?.fields[46]?.value
                            ?.raw,
                        ).format('MMMM Do YYYY')}
                  </Text>
                </View>

                <View>
                  <Image
                    resizeMode="stretch"
                    source={require('../../assets/images/line.png')}
                    style={styles.expatImgLine}
                  />
                </View>

                <View style={{alignItems: 'center'}}>
                  <Icon
                    type="Entypo"
                    name="location-pin"
                    size={20}
                    color="red"
                  />
                  <Text
                    style={{
                      color: 'grey',
                      width: 70,
                      textAlign: 'center',
                      fontSize: 9,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {!viewMember?.xprofile?.groups[3]?.fields
                      ? null
                      : moment(
                          viewMember?.xprofile?.groups[3]?.fields[47]?.value
                            ?.raw,
                        ).format('MMMM Do YYYY')}
                  </Text>
                </View>
              </View>
              <View style={styles.expatJourneyInfo}>
                <Text
                  style={{
                    color: '#333',
                    color: colors.grey,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  My reason for this relocation
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {!viewMember?.xprofile?.groups[3]?.fields
                    ? null
                    : viewMember?.xprofile?.groups[3]?.fields[51]?.value?.raw}
                </Text>
                <View style={styles.footerSeparator} />

                <View>
                  <Text
                    style={{
                      color: colors.grey,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Interests
                  </Text>
                  {!viewMember?.xprofile?.groups[4]?.fields
                    ? null
                    : viewMember?.xprofile?.groups[4]?.fields[67]?.value?.unserialized.map(
                        int => (
                          // <View style={styles.interest}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: '#333',
                                fontFamily: 'Poppins-Regular',
                              }}>
                              {int}
                            </Text>
                          </View>
                        ),
                      )}
                </View>
              </View>
            </View>
          </>
        )}
        <View style={styles.footerSeparator} />
        <TouchableOpacity style={styles.timeline}>
          <Text style={styles.timelineText}>Connections</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.expat}}>12</Text>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={30}
              color="#333"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Groups</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.expat}}>06</Text>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={30}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Forums</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Text style={{color: colors.expat}}>06</Text> */}
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={30}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Media</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.expat}}>126</Text>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={30}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          keyExtractor={(item, index) => String(index)}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.timelineBox2}>
              <View>
                <ImageBackground
                  resizeMode="stretch"
                  imageStyle={{borderRadius: 10}}
                  source={{uri: item.img}}
                  style={styles.logoImage2}>
                  <Icon style={styles.playIcon} name="play" size={50} />
                </ImageBackground>
              </View>
              <View style={{marginHorizontal: 20}}>
                <Text style={{color: '#333', fontSize: 13}}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Documents</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.expat}}>03</Text>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={30}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          keyExtractor={(item, index) => String(index)}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.timelineBox2}>
              <View>
                <ImageBackground
                  resizeMode="stretch"
                  imageStyle={{borderRadius: 10}}
                  source={{uri: item.img2}}
                  style={styles.logoImage2}>
                  <Icon
                    type="Fontisto"
                    style={styles.playIcon}
                    name="folder"
                    size={50}
                    color="#6d6e71"
                  />
                </ImageBackground>
              </View>
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 13,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.desc}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <CustomBottomSheet
        ref={sheetRef}
        setModelVisible={setModelVisible}
        setModelVisible2={setModelVisible2}
        setModelVisible3={setModelVisible3}
        // openRemoveConnection={openRemoveConnection}
        show2={show2} 
        setShow2={setShow2}
      />
      {/* <CustomBottomSheet /> */}
      {/* {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <ViewProfileList setModelVisible={setModelVisible} />
          </BottomSheetView>
        </BottomSheet>
      )} */}
    </>
  );
};

export default ViewMemberComponent;

//  {/* <Image
//             resizeMode="stretch"
//             source={{uri: profile?.avatar_urls?.thumb}}
//             style={styles.logoImage}
//           /> */}
//         <TouchableOpacity
//           style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}
//           onPress={() => {
//             navigate('members');
//           }}>
//           <Icon2
//             name="arrowleft"
//             color="#333"
//             size={30}
//             // style={styles.profileIcon}
//           />
//           <Text style={{color: '#333', marginLeft: 10}}>Back</Text>
//         </TouchableOpacity>
//         <View style={styles.signBox}>
//           <Text style={styles.subtitle}>{profile?.name}</Text>
//           <View style={styles.mutiStepForm}>
//             <View style={styles.singleStepBox}>
//               <TouchableOpacity>
//                 <Text style={styles.mutiStepText}>
//                   @{profile?.profile_name}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.singleStepBox}>
//               <TouchableOpacity>
//                 <Text style={styles.mutiStepText}>
//                   {/* {getProfile.registered_date} */}
//                   {moment(profile?.registered_date).format('MMMM Do YYYY')}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.profileIconBox}>
//             <Icon
//               name="users"
//               color="#FF751899"
//               size={30}
//               style={styles.profileIcon}
//             />
//             <Text style={styles.profileIconText}>
//               {profile?.points?.point} invites
//             </Text>
//           </View>
//           <View style={styles.mutiStepForm}>
//             <View style={styles.singleStepBox}>
//               <TouchableOpacity>
//                 <View style={styles.followers}>
//                   <View>
//                     <Text style={styles.profileIconText}>
//                       {profile?.followers}
//                     </Text>
//                   </View>
//                   <View>
//                     <Text style={styles.mutiStepText}>Followers</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.singleStepBox}>
//               <TouchableOpacity>
//                 <View>
//                   <Text style={styles.profileIconText}>
//                     {profile?.following}
//                   </Text>
//                   <Text style={styles.mutiStepText}>Following</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <View style={styles.subTextTile}>
//           <View>
//             <Text style={styles.aboutMeTitle}>About me</Text>
//           </View>
//           <View>
//             <Text style={styles.aboutMeTitle}>Personal Details</Text>
//           </View>
//           <View>
//             <Text style={styles.aboutMeTitle}>My Expat Jounrey</Text>
//           </View>
//         </View>
//         <View style={styles.signBox}>
//           <View style={styles.aboutMe}>
//             <Text style={styles.aboutMeTextTitle}>
//               {profile?.xprofile?.groups[1]?.fields[1]?.name}
//             </Text>
//             <Text style={{color: '#333'}}>
//               {/* {getProfile?.xprofile?.groups?.value?.raw} */}
//               {profile?.xprofile?.groups[1]?.fields[1]?.value?.raw}
//             </Text>
//           </View>
//           <View style={styles.aboutMe}>
//             <Text style={styles.aboutMeTextTitle}>
//               {profile?.xprofile?.groups[1]?.fields[3]?.name}
//             </Text>
//             <Text style={{color: '#333'}}>
//               {profile?.xprofile?.groups[1]?.fields[3]?.value?.raw}
//             </Text>
//           </View>

//           <View style={styles.aboutMe}>
//             {!profile?.xprofile?.groups[1]?.fields[36]?.name &&
//             !profile?.xprofile?.groups[1]?.fields[36]?.value?.raw ? (
//               <Text style={{color: '#333'}}>No Avaliable data</Text>
//             ) : (
//               <>
//                 <Text style={styles.aboutMeTextTitle}>
//                   {profile?.xprofile?.groups[1]?.fields[36]?.name}
//                 </Text>
//                 <Text style={{color: '#333'}}>
//                   {profile?.xprofile?.groups[1]?.fields[36]?.value?.raw}
//                 </Text>
//               </>
//             )}
//           </View>
//           <View style={styles.aboutMe}>
//             {!profile?.xprofile?.groups[1]?.fields[20]?.name &&
//             !profile?.xprofile?.groups[1]?.fields[20]?.value?.raw ? (
//               <Text style={{color: '#333'}}>No Avaliable data</Text>
//             ) : (
//               <>
//                 <Text style={styles.aboutMeTextTitle}>
//                   {profile?.xprofile?.groups[1]?.fields[20]?.name}
//                 </Text>
//                 <Text style={{color: '#333'}}>
//                   {profile?.xprofile?.groups[1]?.fields[20]?.value?.raw}
//                 </Text>
//               </>
//             )}
//           </View>
//         </View>
