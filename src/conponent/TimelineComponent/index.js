import React, { useCallback, useRef } from 'react'
import { ActivityIndicator, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/themes/colors'
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from '../CustomIcon'
import moment from 'moment';
import styles from './styles'
import VideoPlayer from 'react-native-video-controls';
import TimelineBottomSheet from '../bottomSheetContainer/TimelineBottomSheet';
// import VideoPlayer from 'react-native-video-player'

import CreateTimeline from '../../screens/createTimeline';
import { useNavigation } from '@react-navigation/native';
import Comments from '../../screens/Comments';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const TimelineComponent = ({
  data,
  loading,
  favoritePost,
  openComment,
  setOpenComment,
  getUser_Id,
  getAllCommentOnPost,
  navigation,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const {navigate} = useNavigation();

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['25%'];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    // console.log("handleSheetChanges", index);
  }, []);
  // console.log(data, 'data')
  return (
    <>
      <ScrollView
        style={styles.body}
        // refreshControl={<RefreshControl refreshing={loading} onRefresh={data} />}
        // refreshing={loading}
        // onRefresh={data}
      >
        {/* {loading && (
        <ActivityIndicator
          size="large"
          style={{paddingVertical: 100, paddingHorizontal: 100}}
        />
      )} */}
        {/* {!loading && ( */}
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
          {loading && (
            <ActivityIndicator
              size="large"
              style={{paddingVertical: 100, paddingHorizontal: 100}}
            />
          )}
          {!loading && (
            <>
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
                          handleSheetChanges(item.id);
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
                  ))}

                  {/* //!Video */}

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
                      style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
                      {item?.favorite_count <= 1 ? (
                        <Text>{item?.favorite_count} like</Text>
                      ) : (
                        <Text>{item?.favorite_count} likes</Text>
                      )}
                    </Text>
                    {/* checking.. */}
                    {/* <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: '#333',
                          marginLeft: 9,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item.content_stripped}
                      </Text>
                    </View> */}
                    <View>
                      <Text
                        style={{
                          color: colors.grey,
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item?.comment_count} comments
                      </Text>
                      <Text
                        style={{color: '#999', fontFamily: 'Poppins-Regular'}}>
                        {moment(item?.date).format('MMMM Do YYYY')}
                      </Text>
                    </View>
                    {/*//! commemt */}
                    {/* {item?.comments.map((c)=>(
                      <>
                      {openComment && (
                      <View style={styles.comment}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginHorizontal: 15,
                            marginVertical: 10,
                          }}>
                          <View>
                            <Image
                              source={{uri: IMAGEDEFAULT}}
                              style={styles.profileImg2}
                            />
                          </View>
                          <View>
                            <Text style={{color: '#333'}}>Person Name </Text>
                            <Text style={{color: '#333'}}>2 days ago</Text>
                            <View style={{width: 320, height: 70}}>
                              <Text
                                style={{
                                  color: '#999',
                                  fontSize: 10,
                                }}>
                                Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquid beatae, minima
                              distinctio, laboriosam cum autem mollitia placeat
                              quos ducimus,
                              </Text>
                              <TextInput
                              style={{color: '#333'}}
                              multiline={true}
                            />
                            </View>

                            <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity style={{marginHorizontal: 20}}>
                                <Text style={{color: '#333'}}>Reply</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{marginHorizontal: 20}}>
                                <Text style={{color: 'red'}}>Delete</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}


                      </>
                      
                    ))} */}
                    {/* {openComment && (
                      <View style={styles.comment}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginHorizontal: 15,
                            marginVertical: 10,
                          }}>
                          <View>
                            <Image
                              source={{uri: IMAGEDEFAULT}}
                              style={styles.profileImg2}
                            />
                          </View>
                          <View>
                            <Text style={{color: '#333'}}>Person Name </Text>
                            <Text style={{color: '#333'}}>2 days ago</Text>
                            <View style={{width: 320, height: 70}}>
                              <Text
                                style={{
                                  color: '#999',
                                  fontSize: 10,
                                }}>
                                Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquid beatae, minima
                              distinctio, laboriosam cum autem mollitia placeat
                              quos ducimus,
                              </Text>
                              <TextInput
                              style={{color: '#333'}}
                              multiline={true}
                            />
                            </View>

                            <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity style={{marginHorizontal: 20}}>
                                <Text style={{color: '#333'}}>Reply</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{marginHorizontal: 20}}>
                                <Text style={{color: 'red'}}>Delete</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    )} */}
                    {/* <Text style={{color: '#333'}}>Hello</Text> */}
                  </View>
                  {/* <View style={{height: 0.5, backgroundColor: colors.grey}} /> */}
                  <View style={styles.footerSeparator} />

                  {/* //!end */}
                </View>
              ))}
            </>
          )}

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
        {/* )} */}

        <View style={{paddingVertical: 50}} />
      </ScrollView>
      {isOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}>
          <BottomSheetView>
            <TimelineBottomSheet />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

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
            // <View style={styles.comment}>
            //  <View
            //     style={{
            //       flexDirection: 'row',
            //       marginHorizontal: 15,
            //       marginVertical: 10,
            //     }}>
            //      <View>
            //       <Image
            //          source={{uri: IMAGEDEFAULT}}
            //          style={styles.profileImg2}
            //        />
            //      </View>
            //      <View>
            //        <Text style={{color: '#333'}}>Person Name </Text>
            //        <Text style={{color: '#333'}}>2 days ago</Text>

            //        <Text style={{color: '#999', fontSize: 10}}>
            //          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            //          Aliquid beatae, minima distinctio, laboriosam cum autem
            //          mollitia placeat quos ducimus,
            //        </Text>
            //        <View style={{flexDirection: 'row'}}>
            //          <TouchableOpacity style={{marginHorizontal: 10}}>
            //            <Text style={{color: '#333'}}>Reply</Text>
            //          </TouchableOpacity>
            //          <TouchableOpacity style={{marginHorizontal: 10}}>
            //            <Text style={{color: 'red'}}>Delete</Text>
            //          </TouchableOpacity>
            //        </View>
            //      </View>
            //    </View>
            //  </View>
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