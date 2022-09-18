import React from 'react';
import {Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../assets/themes/colors';
import CustomButton from '../../conponent/CustomButton';
import Input from '../../conponent/Input';
import { LOGIN, REGISTER } from '../../constants/routeNames';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: 1,
    img: require('../../assets/images/onboarding1.png'),
  },
  {
    id: 2,
    img: require('../../assets/images/onboarding2.png'),
  },
  {
    id: 3,
    img: require('../../assets/images/onboarding3.png'),
  },
  {
    id: 4,
    img: require('../../assets/images/onboarding4.png'),
  },
  {
    id: 5,
    img: require('../../assets/images/onboarding5.png'),
  },
];

const Slide = ({item}) => {
  return (
    <>
      <View style={{alignItems: 'center', marginVertical: 30}}>
        <Image
          source={item.img}
          style={{height: 450, width: width}}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const Onboarding = ({navigation}) => {
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


  const updateCurrentSlideIndex =(e)=>{
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX/width);
    setCurrentSlidesIndex(currentIndex);
    console.log(currentIndex);
  }



  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          data={slides}
          // contentContainerStyle={{height: height * 0.7}}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </View>
      <View>
        <View style={styles.inputView}>
          <TextInput placeholder="Enter invited Code" style={styles.input} />
        </View>
        <View style={{width: 350, alignSelf: 'center', marginVertical: 10}}>
          <CustomButton
            expat
            title="Submit"
            onPress={() => {
              navigation.replace(REGISTER);
            }}
          />
        </View>
      </View>
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Don't have a code?</Text>
        <TouchableOpacity>
          <Text style={styles.linkBtn}>Request Invite</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace(LOGIN);
          }}>
          <Text style={styles.linkBtn}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;
