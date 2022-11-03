import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../CustomIcon';
import styles from './styles';
import moment from 'moment';
import colors from '../../assets/themes/colors';
import ProfileEdit from '../../screens/ProfileEdit';
import Timeline from '../../screens/Timeline';
import Media from '../../screens/Media';
import VideoPlayer from 'react-native-video-controls';
// import {useRoute} from '@react-navigation/native';


const ProfileComponent = ({
  getUser_Id,
  loading,
  getProfile,
  profile,
  photoData,
  navigation,
  connectionTotal,
}) => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const {navigate} = useNavigation();
  // console.log({loading, getProfile}, 'profileComp');

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
      <ScrollView style={styles.container}>
        {loading && (
          <ActivityIndicator
            size="large"
            style={{paddingVertical: 100, paddingHorizontal: 100}}
          />
        )}
        {!loading && (
          <>
            <View style={styles.profileContainer}>
              <View style={styles.profileHeader}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
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
                  resizeMode="stretch"
                  source={{uri: getProfile?.avatar_urls?.full}}
                  style={styles.profileImg}
                />
                <View style={styles.admin}>
                  <Text
                    style={{color: '#3376B9', fontFamily: 'Poppins-Regular'}}>
                    {getProfile?.is_wp_admin ? 'ADMIN' : 'MEMBER'}
                  </Text>
                </View>
              </View>
              <View style={styles.headerText}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 15,
                    letterSpacing: 0,
                    alignSelf: 'center',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 20,
                  }}>
                  {getProfile?.name}
                </Text>
                <View style={styles.headerText2}>
                  <Text
                    style={{color: '#8f92a1', fontFamily: 'Poppins-Regular'}}>
                    @{getProfile?.profile_name}
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
                  <Text style={{color: '#8f92a1'}}>
                    {moment(profile?.registered_date).format('MMMM Do YYYY')}
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
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => {
                  navigate('ProfileEdit', {getProfile});
                }}>
                <Text
                  style={{
                    color: '#3376B9',
                    alignSelf: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
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
                  {/* india */}
                  {getProfile?.xprofile?.groups[1]?.fields[36]?.value?.raw}
                </Text>
              </View>
              <View style={styles.personalInfo}>
                <Icon type="Entypo" name="location" size={15} color="#8f92a1" />
                <Text
                  style={{
                    color: '#8f92a1',
                    marginHorizontal: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  From
                </Text>
                <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
                  {getProfile?.xprofile?.groups[1]?.fields[36]?.value?.raw}
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
                  {/* sept 24th, 1998 */}
                  {moment(
                    getProfile?.xprofile?.groups[6]?.fields[85]?.value?.raw,
                  ).format('MMMM Do YYYY')}
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
                  {getProfile?.xprofile?.groups[6]?.fields[88]?.value?.raw
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
                        {moment(
                          getProfile?.xprofile?.groups[3]?.fields[46]?.value
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
                        {moment(
                          getProfile?.xprofile?.groups[3]?.fields[47]?.value
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
                      {getProfile?.xprofile?.groups[3]?.fields[51]?.value?.raw}
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
                      {!getProfile?.xprofile?.groups[4]?.fields[67]?.value
                        ? null
                        : getProfile?.xprofile?.groups[4]?.fields[67]?.value?.unserialized.map(
                            int => (
                              <View>
                                <Text
                                  style={{
                                    color: '#333',
                                    margin: 10,
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

            {/* <View style={styles.footerSeparator} /> */}
            {/* <TouchableOpacity
              style={styles.timeline}
              onPress={() => {
                navigate(Timeline);
              }}>
              <Text style={styles.timelineText}>Timeline</Text>
              <Icon
                type="MaterialIcons"
                name="keyboard-arrow-right"
                size={30}
                color="#333"
              />
            </TouchableOpacity> */}
            <View style={styles.footerSeparator} />
            <TouchableOpacity
              style={styles.timeline}
              onPress={() => {
                navigate('MemberStack');
              }}>
              <View>
                <Text style={styles.timelineText}>Connections</Text>
                {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 10,
                  }}>
                  <View style={styles.circleBox}></View>
                  <View style={styles.circleBox}></View>
                  <View style={styles.circleBox}></View>
                </View> */}
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: colors.expat, fontSize: 12}}>
                  {connectionTotal}
                </Text>
                <Icon
                  type="MaterialIcons"
                  name="keyboard-arrow-right"
                  size={20}
                  color="grey"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.footerSeparator} />
            <View style={styles.timeline}>
              <Text style={styles.timelineText}>Groups</Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: colors.expat, fontSize: 12}}>06</Text>
                <Icon
                  type="MaterialIcons"
                  name="keyboard-arrow-right"
                  size={20}
                  color="grey"
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
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.footerSeparator} />
            <TouchableOpacity
              style={styles.timeline}
              onPress={() => {
                navigate(Media);
              }}>
              <Text style={styles.timelineText}>Media</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: colors.expat, fontSize: 12}}>
                  {photoData?.length}
                </Text>
                <Icon
                  type="MaterialIcons"
                  name="keyboard-arrow-right"
                  size={20}
                  color="grey"
                />
              </View>
            </TouchableOpacity>
            <FlatList
              horizontal
              keyExtractor={(item, index) => String(index)}
              data={photoData}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.timelineBox2}>
                  <View>
                    <ImageBackground
                      resizeMode="stretch"
                      imageStyle={{borderRadius: 10}}
                      source={{uri: item?.url || null}}
                      style={styles.logoImage2}>
                      <Icon style={styles.playIcon} name="play" size={50} />
                    </ImageBackground>
                  </View>
                  <View style={{marginHorizontal: 20}}>
                    <Text style={{color: '#333', fontSize: 13}}>
                      {item.desc}
                    </Text>
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
              data={documents}
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
                    <Text style={{color: '#333', fontSize: 13}}>
                      {item.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default ProfileComponent;
 

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