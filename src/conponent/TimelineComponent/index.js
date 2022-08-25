import React from 'react'
import { ActivityIndicator, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/themes/colors'
import Icon from '../CustomIcon'
import moment from 'moment';
import styles from './styles'
import Video from 'react-native-video';
import CreateTimeline from '../../screens/createTimeline';
import { useNavigation } from '@react-navigation/native';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const TimelineComponent = ({data, loading}) => {
  const {navigate} = useNavigation();
  // console.log(data, 'data')
  return (
    <ScrollView
      style={styles.body}
      // refreshControl={<RefreshControl refreshing={loading} onRefresh={data} />}
    >
      {loading && (
        <ActivityIndicator
          size="large"
          style={{paddingVertical: 100, paddingHorizontal: 100}}
        />
      )}
      {!loading && (
        <>
          <View style={{paddingHorizontal: 15}}>
            <View style={styles.timelineHeader}>
              <TouchableOpacity>
                <Icon
                  type="MaterialIcons"
                  name="keyboard-arrow-left"
                  size={30}
                  color="#333"
                />
              </TouchableOpacity>
              <Text style={{color: colors.grey, fontSize: 15}}>Timeline</Text>
              <View />
            </View>
            <View style={styles.subHeader}>
              <Image
                source={{uri: data?.user_avatar?.full || IMAGEDEFAULT}}
                style={styles.profileImg}
              />
              <TouchableOpacity style={styles.InputContainer}>
                <Text style={{color: colors.grey, marginHorizontal: 20}} onPress={()=>{
                  navigate(CreateTimeline);
                }}>
                  Write a post ..
                </Text>
                {/* <TextInput
                  placeholder="Write a post ..."
                  style={styles.input}
                /> */}
              </TouchableOpacity>
              <View style={styles.pickImageIcon}>
                <Icon name="image" size={25} color="#1c75bc" />
              </View>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: colors.grey}} />
          {data?.map(item => (
            <View key={item.id}>
              {/* //!start */}
              <View style={{paddingHorizontal: 15}}>
                <View style={styles.subTitleWrapper}>
                  <View style={styles.subTitle}>
                    <Image
                      source={{
                        uri:
                          item?.user_avatar?.full ||
                          'https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22',
                      }}
                      style={styles.profileImg}
                    />
                    <View>
                      <Text style={{color: '#333'}}>{item.name}</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Icon
                      type="Feather"
                      name="more-horizontal"
                      color="#333"
                      size={28}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: '100%',
                    fontSize: 15,
                  }}>
                  <Text
                    style={{
                      color: '#333',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                    }}>
                    {!item?.content_stripped ? null : item?.content_stripped}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima excepturi quod nesciunt, molestias quia earum sapiente modi impedit maiores laborum aliquam doloribus cupiditate vitae provident distinctio nihil eos labore. */}
                  </Text>
                </View>
              </View>
              {/* //!images */}
              
              {item?.bp_documents?.map(img => (
                <>
                  <View key={img.id}>
                    <Image
                      resizeMode="stretch"
                      source={{
                        uri:
                          img?.attachment_data?.full ||
                          'https://api.lorem.space/image/car?w=150&h=150&hash=A89D0DE6',
                      }}
                      style={styles.TimelineImg}
                    />
                  </View>
                </>
              ))}
              {/* //!Video */}
              {item?.bp_videos?.map(video => (
                <View key={video.id}>
                  <Video
                    resizeMode="cover"
                    hideShutterView={true}
                    paused={true}
                    source={{
                      uri:
                        video?.url ||
                        'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    controls={true}
                    // style={{width: '100%', height: '20%'}}
                    style={styles.TimelineImg}
                  />
                </View>
              ))}

              {/* //!Video */}

              <View style={{paddingHorizontal: 15}}>
                <View style={styles.icons}>
                  <TouchableOpacity>
                    <Icon
                      type="MaterialIcons"
                      name="favorite-border"
                      size={23}
                      color="#555"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      type="Ionicons"
                      name="chatbubble-outline"
                      size={23}
                      color="#555"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon type="Feather" name="send" size={23} color="#555" />
                  </TouchableOpacity>
                </View>
                <Text style={{color: '#333'}}>
                  {!item?.favorite_count
                    ? 'No Like on this post'
                    : item?.favorite_count}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#333'}}>username</Text>
                  <Text style={{color: '#333', marginLeft: 9}}>
                    Lorem ipsum dolor sit amet onsectetur...More
                  </Text>
                </View>
                <View>
                  <Text style={{color: colors.grey}}>2 comments</Text>
                  <Text style={{color: '#999'}}>
                    {moment(item?.date).format('MMMM Do YYYY')}
                  </Text>
                </View>
              </View>
              <View style={{height: 0.5, backgroundColor: colors.grey}} />

              {/* //!end */}
            </View>
          ))}

          {/* <View style={styles.subTitleWrapper}>
              <View style={styles.subTitle}>
                <Image
                  source={{
                    uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22',
                  }}
                  style={styles.profileImg}
                />
                <View>
                  <Text style={{color: '#333'}}>User Name</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Icon
                  type="Feather"
                  name="more-horizontal"
                  color="#333"
                  size={28}
                />
              </TouchableOpacity>
            </View> */}

          {/* <View>
            <Image
              source={{
                uri: 'https://api.lorem.space/image/car?w=150&h=150&hash=A89D0DE6',
              }}
              style={styles.TimelineImg}
            />
          </View> */}
          {/* <View style={{paddingHorizontal: 15}}>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Icon
                  type="MaterialIcons"
                  name="favorite-border"
                  size={23}
                  color="#555"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  type="Ionicons"
                  name="chatbubble-outline"
                  size={23}
                  color="#555"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon type="Feather" name="send" size={23} color="#555" />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#333'}}>265 likes</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#333'}}>Usename</Text>
              <Text style={{color: '#333', marginLeft: 9}}>
                Lorem ipsum dolor sit amet onsectetur...More
              </Text>
            </View>
            <View>
              <Text style={{color: colors.grey}}>2 comments</Text>
              <Text style={{color: '#999'}}>2 hours ago</Text>
            </View>
          </View> */}
          {/* //! more checks */}
        </>
      )}

      <View style={{paddingVertical: 50}} />
    </ScrollView>
  );
}

export default TimelineComponent


// {/* <View
//             style={{
//               height: 0.5,
//               backgroundColor: colors.grey,
//               marginVertical: 15,
//             }}
//           />
//           <View style={{paddingHorizontal: 15}}>
//             <View style={styles.subHeader2}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Image
//                   source={{
//                     uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=9D9539E7',
//                   }}
//                   style={styles.profileImg}
//                 />
//                 <View>
//                   <Text style={{color: '#333'}}>Person Name </Text>
//                   <Text style={{color: '#333'}}>2 days ago</Text>
//                 </View>
//               </View>
//               <View style={styles.pickImageIcon}>
//                 <Icon
//                   type="Feather"
//                   name="more-horizontal"
//                   color="#333"
//                   size={28}
//                 />
//               </View>
//             </View>
//             <View>
//               <Text style={{color: '#333'}}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
//                 minima reprehenderit corrupti suscipit ipsam sed dolorum
//                 voluptatibus assumenda recusandae accusantium, architecto illo
//                 ipsa. Minus suscipit a esse, veniam eum quasi.
//               </Text>
//             </View>
//             <View style={styles.icons}>
//               <TouchableOpacity>
//                 <Icon
//                   type="MaterialIcons"
//                   name="favorite-border"
//                   size={23}
//                   color="#555"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Icon
//                   type="Ionicons"
//                   name="chatbubble-outline"
//                   size={23}
//                   color="#555"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Icon type="Feather" name="send" size={23} color="#555" />
//               </TouchableOpacity>
//             </View>
//             <Text style={{color: '#333'}}>265 likes</Text>
//             <View style={{flexDirection: 'row'}}>
//               <Text style={{color: '#333'}}>Usename</Text>
//               <Text style={{color: '#333', marginLeft: 9}}>
//                 Lorem ipsum dolor sit amet onsectetur...More
//               </Text>
//             </View>
//             <View>
//               <Text style={{color: colors.grey}}>2 comments</Text>
//               <Text style={{color: '#999'}}>2 hours ago</Text>
//             </View>
//             <View style={styles.comment}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   marginHorizontal: 15,
//                   marginVertical: 10,
//                 }}>
//                 <View>
//                   <Image
//                     source={{uri: IMAGEDEFAULT}}
//                     style={styles.profileImg2}
//                   />
//                 </View>
//                 <View>
//                   <Text style={{color: '#333'}}>Person Name </Text>
//                   <Text style={{color: '#333'}}>2 days ago</Text>

//                   <Text style={{color: '#999', fontSize: 10}}>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Aliquid beatae, minima distinctio, laboriosam cum autem
//                     mollitia placeat quos ducimus,
//                   </Text>
//                   <View style={{flexDirection: 'row'}}>
//                     <TouchableOpacity style={{marginHorizontal: 10}}>
//                       <Text style={{color: '#333'}}>Reply</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{marginHorizontal: 10}}>
//                       <Text style={{color: 'red'}}>Delete</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </View>
//             <View
//               style={{
//                 height: 0.5,
//                 backgroundColor: colors.grey,
//                 marginVertical: 15,
//               }}
//             />
//             <View style={styles.subHeader2}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Image
//                   source={{
//                     uri: 'https://api.lorem.space/image/face?w=150&h=150&hash=9D9539E7',
//                   }}
//                   style={styles.profileImg}
//                 />
//                 <View>
//                   <Text style={{color: '#333'}}>Person Name </Text>
//                   <Text style={{color: '#333'}}>2 days ago</Text>
//                 </View>
//               </View>
//               <View style={styles.pickImageIcon}>
//                 <Icon
//                   type="Feather"
//                   name="more-horizontal"
//                   color="#333"
//                   size={28}
//                 />
//               </View>
//             </View>
//             <View>
//               <Text style={{color: '#333'}}>
//                 {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima reprehenderit corrupti suscipit ipsam sed dolorum
//             voluptatibus assumenda recusandae accusantium, architecto illo ipsa.
//             Minus suscipit a esse, veniam eum quasi. */}
//               </Text>
//             </View>
//             <View style={styles.icons}>
//               <TouchableOpacity>
//                 <Icon
//                   type="MaterialIcons"
//                   name="favorite-border"
//                   size={23}
//                   color="#555"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Icon
//                   type="Ionicons"
//                   name="chatbubble-outline"
//                   size={23}
//                   color="#555"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Icon type="Feather" name="send" size={23} color="#555" />
//               </TouchableOpacity>
//             </View>
//             <Text style={{color: '#333'}}>265 likes</Text>
//             <View style={{flexDirection: 'row'}}>
//               <Text style={{color: '#333'}}>Usename</Text>
//               <Text style={{color: '#333', marginLeft: 9}}>
//                 Lorem ipsum dolor sit amet onsectetur...More
//               </Text>
//             </View>
//             <View>
//               <Text style={{color: colors.grey}}>2 comments</Text>
//               <Text style={{color: '#999'}}>2 hours ago</Text>
//             </View>
//           </View> */}