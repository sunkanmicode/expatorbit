import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/themes/colors';
import VideoPlayer from 'react-native-video-controls';
import Icon from '../CustomIcon'
import styles from './styles';

// const width = Dimensions.get('screen').width/2-30
const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

 

const MediaComponent = ({
  photoData,
  photoLoading,
  photoError,
  getAllPictures,
  videoData,
  videoLoading,
  videoError,
  getAllVideos,
  navigation
}) => {
  const [media, setMedia] = React.useState(0);
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
  const data = [
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A/9',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E66932',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/7',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=7F5AE56A/9',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/4',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/8',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/4',
    },
    {
      img: 'https://api.lorem.space/image/movie?w=150&h=220&hash=225E6693/8',
    },
  ];
 

  const categories = [
    // {
    //   name: (
    //     <Icon type="Ionicons" name="md-filter-outline" color="#333" size={15} />
    //   ),
    //   onPress: () => {},
    // },
    {
      name: 'Photos',
      onPress: () => {
        getAllPictures();
      },
    },
    {
      name: 'Videos',
      onPress: () => {
        getAllVideos();
      },
    },
    {name: 'Alblums', onPress: () => {}},
  ];
  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>{setCategoriesIndex(index),item.onPress;}}>
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

  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={{backgroundColor: '#fff', padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
              navigation.goBack();
            }}>
              <Icon
                type="MaterialIcons"
                name="arrow-back-ios"
                size={20}
                color="#333"
              />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.grey,
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
                fontWeight: 'bold',
              }}>
              Media
            </Text>
          </View>
          <Text style={{color: colors.accent, fontSize: 15}}>Select</Text>
        </View>
        <CategoryList />
        <View>
          <Text
            style={{
              color: colors.grey,
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            July
          </Text>
        </View>
      </View>
      {/*//! {Photos} */}
      {categoriesIndex === 0 && (
        <View>
          <FlatList
            //   horizontal
            numColumns={3}
            keyExtractor={(item, index) => String(index)}
            data={photoData}
            renderItem={({item}) => (
              <>
                {photoLoading ? (
                  <ActivityIndicator style={styles.mediaBox} />
                ) : (
                  <TouchableOpacity>
                    <View>
                      <Image
                        resizeMode="cover"
                        source={{
                          uri: item?.attachment_data.full || IMAGEDEFAULT,
                        }}
                        // style={{width: 200, height: '100%'}}
                        style={styles.mediaBox}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </>
            )}
          />
        </View>
      )}
      {/*//! {end of Photos} */}
      {/*//! {Video} */}
      {categoriesIndex === 1 && (
        <ScrollView style={{}}>
          {videoData?.map(v => (
            <TouchableOpacity style={styles.mediaBox2} key={v.id}>
              <VideoPlayer
                resizeMode="stretch"
                hideShutterView={true}
                paused={true}
                source={{
                  uri:
                    v.url ||
                    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                // controls={true}
                style={{width: '100%', height: '20%'}}
                // style={styles.mediaBox}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/*//! {end of video} */}
      {/* //!{Albums} */}
      {categoriesIndex === 2 && (
        <View>
          <FlatList
            //   horizontal
            numColumns={3}
            keyExtractor={(item, index) => String(index)}
            data={data}
            renderItem={({item}) => (
              <>
                <TouchableOpacity style={styles.mediaBox}>
                  <View>
                    <Image
                      resizeMode="cover"
                      source={{uri: item.img || IMAGEDEFAULT}}
                      // style={{width: 200, height: '100%'}}
                      style={styles.mediaBox}
                    />
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
      )}

      {/*//! {end of Albums} */}
    </View>
  );
};

export default MediaComponent