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
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/themes/colors';
import ProfileEdit from '../../screens/ProfileEdit';
import ViewMemberProfile from '../../screens/ViewMember';
import ViewProfileList from '../bottomSheetContainer/ViewProfileList';
import CustomModel from '../CustomModel';
// import {useRoute} from '@react-navigation/native';

const ViewMemberComp = () => {
  const {params: {item = {}} = {}} = useRoute()
  console.log(item, 'params');
  const {navigate} = useNavigation();
  const [categoriesIndex, setCategoriesIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [modelVisible2, setModelVisible2] = useState(false);

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
    {name: 'Follow', onPress: () => {}},
    {name: 'Message', onPress: () => {}},
    {
      name: (
        <Icon type="Feather" name="more-horizontal" color="#333" size={15} />
      ),
      onPress: () => {
        handleSheetChanges(0);
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
        modelVisible={modelVisible}
        setModelVisible={setModelVisible}
        // modelBody={
        //   <View>
        //     <Text>
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        //     </Text>
        //   </View>
        // }
        // modelFooter={<></>}
        title="Connection removed"
        // title2='Has been update'
      />
      <CustomModel
        modelVisible={modelVisible}
        setModelVisible={setModelVisible}
        // modelBody={
        //   <View>
        //     <Text>
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        //     </Text>
        //   </View>
        // }
        // modelFooter={<></>}
        title="Member blocked"
        title2="Go to settings to unblock"
      />
      <ScrollView
        style={[
          styles.container,
          {backgroundColor: isOpen ? '#333' : colors.white},
        ]}>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Icon
              type="MaterialIcons"
              // style={styles.playIcon}
              name="keyboard-arrow-left"
              size={25}
              color="#6d6e71"
            />

            <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
              Profile
            </Text>
            <View />
          </View>
          <View style={{padding: 0}}>
            <Image
              source={require('../../assets/images/members.png')}
              style={styles.profileImg}
            />
            <View style={styles.admin}>
              <Text style={{color: '#3376B9', fontFamily: 'Poppins-Regular'}}>
                ADMIN
              </Text>
            </View>
          </View>
          <View style={styles.headerText}>
            <Text style={{color: '#333', fontSize: 15, letterSpacing: 8}}>
              PERSON NAME
            </Text>
            <View style={styles.headerText2}>
              <Text style={{color: '#8f92a1'}}>@hennah</Text>
              <View
                style={{
                  margin: 5,
                  backgroundColor: '#8f92a1',
                  borderRadius: 100,
                  width: 10,
                  height: 10,
                }}
              />
              <Text style={{color: '#8f92a1'}}>Joined Nov 24th</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigate(ViewMemberProfile);
              }}>
              <Text style={{color: '#8f92a1', textAlign: 'center'}}>
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
            <Text style={{color: '#8f92a1', marginHorizontal: 10}}>
              Lives in
            </Text>
            <Text style={{color: '#333'}}>Norib, India</Text>
          </View>
          <View style={styles.personalInfo}>
            <Icon type="Entypo" name="location" size={15} color="#8f92a1" />
            <Text style={{color: '#8f92a1', marginHorizontal: 10}}>From</Text>
            <Text style={{color: '#333'}}>Barcelona, spain</Text>
          </View>
          <View style={styles.personalInfo}>
            <Icon name="birthday-cake" size={15} color="#8f92a1" />
            <Text style={{color: '#8f92a1', marginHorizontal: 10}}>
              Birthday
            </Text>
            <Text style={{color: '#333'}}>sept 24th, 1998</Text>
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
            <Text style={{color: '#333', marginHorizontal: 10}}>Male</Text>
          </View>
          <TouchableOpacity>
            <Text style={{color: '#333'}}> ...see your about me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Timeline</Text>
          <TouchableOpacity>
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
          data={timeline}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.timelineBox}>
              <View style={styles.timeline2}>
                <Image source={{uri: item.uri}} style={styles.profileImg2} />
                <View style={{marginHorizontal: 10}}>
                  <Text style={{color: colors.expat}}>{item.title}</Text>
                  <Text style={{color: '#333', fontSize: 10}}>
                    {item.subTitle},
                  </Text>
                </View>
              </View>
              <View style={{marginHorizontal: 20}}>
                <Text style={{color: '#333', fontSize: 13}}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.footerSeparator} />
        <View style={styles.timeline}>
          <Text style={styles.timelineText}>Connections</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.expat}}>12</Text>
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
                <Text style={{color: '#333', fontSize: 13}}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <ViewProfileList setModelVisible={setModelVisible} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ViewMemberComp;

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
