import React from 'react';
import {
  FlatList,
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from '../CustomIcon';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../Input';
import styles from './styles';
import colors from '../../assets/themes/colors';

const {width, height} = Dimensions.get('window');
console.log(width, 'width');

const slides = [
  {
    id: 1,
    img: require('../../assets/images/home1.png'),
  },
  {
    id: 2,
    img: require('../../assets/images/home2.png'),
  },
];
const data2 = [
  {
    id: 1,
    img2: require('../../assets/images/img1.png'),
  },
  {
    id: 2,
    img2: require('../../assets/images/img2.png'),
  },
];

const HomeComponent = () => {
  const [currentSlidesIndex, setCurrentSlidesIndex] = React.useState(0);

  const Footer = () => {
    return (
      <View
        style={{
          height: 50,
          color: '#333',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlidesIndex == index && {
                  backgroundColor: colors.expat,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlidesIndex(currentIndex);
    console.log(currentIndex);
  };

  const Slide = ({item}) => {
    return (
      <>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={item.img}
            style={{height: 300, width: width}}
            // style={styles.logoImage}
            resizeMode="contain"></ImageBackground>
        </View>
      </>
    );
  };

  return (
    <ScrollView style={{padding: 20}}>
      <View style={styles.header}>
        <Text style={{color: '#333', fontFamily: 'Poppins-Regular'}}>
          Welcome Henna!
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{margin: 20}}>
            <Icon type="Feather" name="user-plus" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              type="Ionicons"
              name="notifications-outline"
              size={20}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputView}>
        <Icon type="Feather" name="search" size={20} color="grey" />
        <TextInput style={styles.input} />
      </View>
      <View>
        <FlatList
          data={slides}
          //   contentContainerStyle={{height: height * 0.7}}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          pagingEnabled
          //   showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </View>
      {/* <View style={styles.headerImg}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/images/home1.png')}
          style={styles.logoImage}>
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
        </ImageBackground>
      </View> */}
      <View style={styles.widget}>
        <TouchableOpacity style={{width: 100}}>
          <Image
            source={require('../../assets/images/cur.png')}
            style={styles.logoImage2}
          />
          <Text
            style={{
              color: '#333',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Currency Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, alignSelf: 'center'}}>
          <Image
            source={require('../../assets/images/lan.png')}
            style={styles.logoImage2}
          />
          <Text
            style={{
              color: '#333',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Language Translator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100}}>
          <Image
            source={require('../../assets/images/met.png')}
            style={styles.logoImage2}
          />
          <Text
            style={{
              color: '#333',
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
            }}>
            Metric Converter
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            color: '#333',
            marginBottom: 10,
            fontFamily: 'Poppins-Regular',
          }}>
          Seek Answer To All Expat Life Issues
        </Text>
        {/* <FlatList
          numColumns={2}
          data={data2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <View>
                  <Image
                    // source={{uri: item.img2}}
                    source={require('../../assets/images/img1.png')}
                    // style={{flex: 1,}}
                    style={styles.card2}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginBottom: 20,
                  }}>
                  <Text>FAQs</Text>
                  <Icon3
                    // type="MaterialCommunityIcons"
                    name="arrow-right-drop-circle"
                    size={15}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        /> */}
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data2.map((d, index) => (
            <View key={d.index} style={styles.card}>
              <View>
                <Image
                  // source={{uri: d.img2}}
                  source={require('../../assets/images/img1.png')}
                  // style={{flex: 1,}}
                  style={styles.card2}
                />
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                <Text>FAQs</Text>
                <Icon3
                  // type="MaterialCommunityIcons"
                  name="arrow-right-drop-circle"
                  size={15}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            color: '#333',
            marginBottom: 10,
            fontFamily: 'Poppins-Regular',
          }}>
          Connect with other Expat
        </Text>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data2.map((d, index) => (
            <View key={d.index} style={styles.card}>
              <View>
                <Image
                  // source={{uri: d.img2}}
                  source={require('../../assets/images/img2.png')}
                  // style={{flex: 1,}}
                  style={styles.card2}
                />
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                <Text>FAQs</Text>
                <Icon3
                  // type="MaterialCommunityIcons"
                  name="arrow-right-drop-circle"
                  size={15}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
