import React, {useCallback, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/themes/colors';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../CustomIcon';
import moment from 'moment';
import styles from './styles';
// import VideoPlayer from 'react-native-video-controls';
import TimelineBottomSheet from '../bottomSheetContainer/TimelineBottomSheet';
import VideoPlayer from 'react-native-video-player';

import CreateTimeline from '../../screens/createTimeline';
import {useNavigation} from '@react-navigation/native';
import Comments from '../../screens/Comments';
import CustomTimelineSheet from '../bottomSheetContainer/CustomTimelineSheet';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const TimelineComponent = ({
  data,
  loading,
  error,
  favoritePost,
  openComment,
  setOpenComment,
  getUser_Id,
  getAllCommentOnPost,
  closeSheet,
  openSheet,
  sheetRef,
  navigation,
}) => {
  const {navigate} = useNavigation();

  return (
    <>
      <View>
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
            <Text
              style={{
                color: colors.grey,
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Timeline
            </Text>
            <View />
          </View>
          <View style={styles.subHeader}>
            <Image
              source={{uri: getUser_Id?.member_rest?.avatar?.full}}
              style={styles.profileImg}
            />
            <TouchableOpacity style={styles.InputContainer}>
              <Text
                style={{
                  color: colors.grey,
                  marginHorizontal: 20,
                  fontFamily: 'Poppins-Regular',
                }}
                onPress={() => {
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
        <View>
          {loading ? (
            <ActivityIndicator
              size="large"
              style={{
                paddingVertical: 100,
                paddingHorizontal: 100,
              }}
            />
          ) : (
            <>
              {error ? (
                <Text
                  style={{
                    color: '#333',
                    paddingVertical: 100,
                    paddingHorizontal: 100,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Some thing went wrong...
                </Text>
              ) : (
                <>
                  {!data ? (
                    <Text
                      style={{
                        color: '333',
                        fontFamily: 'Poppins-Regular',
                        paddingVertical: 100,
                        paddingHorizontal: 100,
                      }}>
                      No data
                    </Text>
                  ) : (
                    <FlatList
                      data={data}
                      keyExtractor={item => item.id.toString()}
                      listKey="data-list"
                      renderItem={({item}) => (
                        <>
                          {/* <ScrollView> */}
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
                                  <Text
                                    style={{
                                      color: '#333',
                                      fontFamily: 'Poppins-Regular',
                                    }}>
                                    {item.name}
                                  </Text>
                                </View>
                              </View>
                              <TouchableOpacity
                                onPress={() => {
                                  openSheet();
                                }}>
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
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                {!item?.content_stripped
                                  ? null
                                  : item?.content_stripped}
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima excepturi quod nesciunt, molestias quia earum sapiente modi impedit maiores laborum aliquam doloribus cupiditate vitae provident distinctio nihil eos labore. */}
                              </Text>
                            </View>
                          </View>

                          <FlatList
                            data={item.bp_media_ids}
                            keyExtractor={item => item.id.toString()}
                            listKey="media-list"
                            renderItem={({item}) => (
                              <>
                                <View>
                                  <Image
                                    resizeMode="stretch"
                                    source={{
                                      uri:
                                        item?.url ||
                                        'https://api.lorem.space/image/car?w=150&h=150&hash=A89D0DE6',
                                    }}
                                    style={styles.TimelineImg}
                                  />
                                </View>
                              </>
                            )}
                          />
                          <FlatList
                            data={item.bp_documents}
                            keyExtractor={item => item.id.toString()}
                            listKey="bp_documents"
                            renderItem={({item}) => (
                              <>
                                <View>
                                  <Image
                                    resizeMode="stretch"
                                    source={{
                                      uri:
                                        item?.attachment_data?.full ||
                                        'https://api.lorem.space/image/car?w=150&h=150&hash=A89D0DE6',
                                    }}
                                    style={styles.TimelineImg}
                                  />
                                </View>
                              </>
                            )}
                          />
                          <FlatList
                            data={item.bp_videos}
                            keyExtractor={item => item.id.toString()}
                            listKey="bp_videos"
                            renderItem={({item}) => (
                              <VideoPlayer
                                video={{uri: item.url}}
                                autoplay={false}
                                defaultMuted={true}
                                videoWidth={1500}
                                videoHeight={1000}
                                thumbnail={{
                                  url: item.attachment_data.activity_thumb,
                                }}
                              />
                            )}
                          />
                          {/* {item?.bp_videos?.map(video => (
                            <View key={video.id}>
                              <VideoPlayer
                                resizeMode="cover"
                                hideShutterView={true}
                                paused={true}
                                source={{
                                  uri:
                                    video?.url ||
                                    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                                }}
                                style={styles.TimelineImg}
                              />
                            </View>
                          ))} */}

                          <View style={{paddingHorizontal: 15}}>
                            <View style={styles.icons}>
                              <TouchableOpacity
                                onPress={() => {
                                  favoritePost(item.id);
                                }}>
                                {item.favorite_count === 0 ? (
                                  <Icon
                                    type="MaterialIcons"
                                    name="favorite-border"
                                    size={23}
                                    color="#555"
                                  />
                                ) : (
                                  <Icon
                                    type="MaterialIcons"
                                    name="favorite"
                                    size={23}
                                    color="red"
                                  />
                                )}
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  // setOpenComment(!openComment);
                                  getAllCommentOnPost(item.id);
                                  navigate('Comments', {item});
                                }}>
                                <Icon
                                  type="Ionicons"
                                  name="chatbubble-outline"
                                  size={23}
                                  color="#555"
                                />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Icon
                                  type="Feather"
                                  name="send"
                                  size={23}
                                  color="#555"
                                />
                              </TouchableOpacity>
                            </View>
                            <Text
                              style={{
                                color: '#333',
                                fontFamily: 'Poppins-Regular',
                              }}>
                              {item?.favorite_count <= 1 ? (
                                <Text>{item?.favorite_count} like</Text>
                              ) : (
                                <Text>{item?.favorite_count} likes</Text>
                              )}
                            </Text>
                            <View>
                              <Text
                                style={{
                                  color: colors.grey,
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                {item?.comment_count} comments
                              </Text>
                              <Text
                                style={{
                                  color: '#999',
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                {moment(item?.date).format('MMMM Do YYYY')}
                              </Text>
                            </View>

                            {/* <Text style={{color: '#333'}}>Hello</Text> */}
                          </View>

                          <View style={styles.footerSeparator} />

                          {/* </ScrollView> */}
                        </>
                      )}
                    />
                  )}
                </>
              )}
            </>
          )}
        </View>
      </View>
      <View style={{paddingVertical: 50}} />
      <CustomTimelineSheet ref={sheetRef} message={<TimelineBottomSheet />} />
    </>
  );
};

export default TimelineComponent;

//  <View>

//   {!loading && (
//     <>
//       {data?.map(item => (
//         <View key={item.id}>
         
//           {item?.bp_videos?.map(video => (
//             <View key={video.id}>
//               <VideoPlayer
//                 resizeMode="cover"
//                 hideShutterView={true}
//                 paused={true}
//                 source={{
//                   uri:
//                     video?.url ||
//                     'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//                 }}
//                 style={styles.TimelineImg}
//               />
//             </View>
//           ))}

//           {/* //!Video */}

//           <View style={{paddingHorizontal: 15}}>
//             <View style={styles.icons}>
//               <TouchableOpacity
//                 onPress={() => {
//                   favoritePost(item.id);
//                 }}>
//                 {item.favorite_count === 0 ? (
//                   <Icon
//                     type="MaterialIcons"
//                     name="favorite-border"
//                     size={23}
//                     color="#555"
//                   />
//                 ) : (
//                   <Icon
//                     type="MaterialIcons"
//                     name="favorite"
//                     size={23}
//                     color="red"
//                   />
//                 )}
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => {
//                   // setOpenComment(!openComment);
//                   getAllCommentOnPost(item.id);
//                   navigate('Comments', {item});
//                 }}>
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
//             <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
//               {item?.favorite_count <= 1 ? (
//                 <Text>{item?.favorite_count} like</Text>
//               ) : (
//                 <Text>{item?.favorite_count} likes</Text>
//               )}
//             </Text>
//             <View>
//               <Text
//                 style={{
//                   color: colors.grey,
//                   fontFamily: 'Poppins-Regular',
//                 }}>
//                 {item?.comment_count} comments
//               </Text>
//               <Text
//                 style={{
//                   color: '#999',
//                   fontFamily: 'Poppins-Regular',
//                 }}>
//                 {moment(item?.date).format('MMMM Do YYYY')}
//               </Text>
//             </View>

//             {/* <Text style={{color: '#333'}}>Hello</Text> */}
//           </View>
//           {/* <View style={{height: 0.5, backgroundColor: colors.grey}} /> */}
//           <View style={styles.footerSeparator} />

//           {/* //!end */}
//         </View>
//       ))}
//     </>
//   )}
// </View>; 
