import React from 'react';
import moment from 'moment';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import colors from '../../assets/themes/colors';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const CommentsComponent = ({
  getCommentsOnPost,
  onChangeForm,
  onSubmit,
  item,
  commentLoading,
  commentError,
  reTryComment,
}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'flex-end',
          padding: 20,
        }}>
        <View>
          <ScrollView>
            {/* <Text style={{color: '#333'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            iure, alias quibusdam cum, quam debitis possimus tenetur doloribus
            fugit id eius sequi dicta ducimus non itaque mollitia blanditiis
            doloremque! Dolorum.
          </Text> */}
            {commentLoading && <ActivityIndicator />}
            {!getCommentsOnPost ? (
              <Text style={{color: '#333', padding: 20}}>
                No comment Yet...
              </Text>
            ) : (
              <View>
                {commentError ? (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        reTryComment(item.id);
                      }}>
                      <Text style={{color: '#333', padding: 20}}>
                        Please check your Connection and try again
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    {getCommentsOnPost.map(c => (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginHorizontal: 15,
                            marginVertical: 10,
                          }}>
                          <View>
                            <Image
                              source={{
                                uri: c.user_avatar.thumb || IMAGEDEFAULT,
                              }}
                              style={styles.profileImg2}
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                color: 'grey',
                                fontFamily: 'Poppins-Regular',
                              }}>
                              {c.name}
                            </Text>
                            <Text
                              style={{
                                color: 'grey',
                                fontSize: 10,
                                fontFamily: 'Poppins-Regular',
                              }}>
                              {moment(c?.date).format('MMMM Do YYYY')}
                            </Text>
                            <View style={{width: 320}}>
                              <Text
                                style={{
                                  color: '#999',
                                  fontSize: 15,
                                  fontFamily: 'Poppins-Regular',
                                }}>
                                {c.content_stripped}
                              </Text>
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
                      </>
                    ))}
                  </>
                )}
              </View>
            )}

            <Text style={{color: '#333'}}></Text>
          </ScrollView>
        </View>
      </View>
      {/* //!hello */}
      <View
        style={{
          // width: 400,
          paddingHorizontal: 20,
          // marginRight: 20,
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: IMAGEDEFAULT}} style={styles.InputImg2} />
          {/* </View>
        <View> */}
          <TextInput
            // style={{color: '#333'}}
            placeholder="Add a comment"
            onChangeText={value => {
              onChangeForm({name: 'content', value});
            }}
            // multiline={true}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              onSubmit(item.id);
            }}>
            <Text style={{color: colors.expat}}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CommentsComponent;

//  {
//    /* <View style={styles.subHeader}>
//           <TextInput style={{color: '#333'}} multiline={true} />
//         </View> */
//  }
//  {/* <ScrollView style={styles.wrapper}>
//         {!getCommentsOnPost ? (
//           <Text style={{color: '#333', padding: 20}}> No comment Yet...</Text>
//         ) : (
//           getCommentsOnPost.map(c => (
//             <>
//               <View>
//                 <ScrollView style={styles.comment}>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       marginHorizontal: 15,
//                       marginVertical: 10,
//                     }}>
//                     <View>
//                       <Image
//                         source={{uri: c.user_avatar.thumb || IMAGEDEFAULT}}
//                         style={styles.profileImg2}
//                       />
//                     </View>
//                     <View>
//                       <Text
//                         style={{color: 'grey', fontFamily: 'Poppins-Regular'}}>
//                         {c.name}
//                       </Text>
//                       <Text
//                         style={{
//                           color: 'grey',
//                           fontSize: 10,
//                           fontFamily: 'Poppins-Regular',
//                         }}>
//                         {moment(c?.date).format('MMMM Do YYYY')}
//                       </Text>
//                       <View style={{width: 320}}>
//                         <Text
//                           style={{
//                             color: '#999',
//                             fontSize: 15,
//                             fontFamily: 'Poppins-Regular',
//                           }}>
//                           {c.content_stripped}
//                         </Text>
//                       </View>
//                       <View style={{flexDirection: 'row'}}>
//                         <TouchableOpacity style={{marginHorizontal: 20}}>
//                           <Text style={{color: '#333'}}>Reply</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{marginHorizontal: 20}}>
//                           <Text style={{color: 'red'}}>Delete</Text>
//                         </TouchableOpacity>
//                       </View>
//                     </View>
//                   </View>
//                 </ScrollView>
//                 <View style={styles.footerSeparator} />
//               </View>
//             </>
//           ))
//         )}

//       </ScrollView>
//       <View style={styles.inputView}>
//         <TextInput style={styles.input} />
//       </View> */}
