import React from 'react';
import {
  ActivityIndicator,
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
import Icon from '../CustomIcon';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Input from '../Input';
import Video from 'react-native-video';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const CreateTimelineComp = ({handleFilePicker, fileSelected}) => {
  console.log(fileSelected, ' fileSelected');
  return (
    <ScrollView style={styles.body}>
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
          <Text style={{color: colors.grey, fontSize: 15}}>Create a post</Text>
          <TouchableOpacity>
            <Text style={{color: '#333'}}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <View style={styles.titleHeader}>
            <Image source={{uri: IMAGEDEFAULT}} style={styles.profileImg} />
            <Text style={{color: '#333'}}>Person Name</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleFilePicker();
            }}
            style={styles.pickImageIcon}>
            <Icon name="image" size={25} color="#1c75bc" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.InputContainer2}>
          <TextInput
            style={styles.input}
            placeholder="Write a post.."
            multiline
          />
        </View>
        <View style={styles.InputContainer}>
          {fileSelected.length > 0
            ? fileSelected.map(file => (
                <View style={styles.imgPickerContainer}>
                  <View style={styles.imgPicker}>
                    {file.type === 'image/jpeg' ? (
                      <Image
                        resizeMode="cover"
                        source={{uri: file.uri || IMAGEDEFAULT}}
                        style={styles.profileImg2}
                      />
                    ) : file.type === 'video/mp4' ? (
                      <Video
                        resizeMode="cover"
                        source={{
                          uri:
                            file.uri ||
                            'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        controls={true}
                        // style={{width: '100%', height: '20%'}}
                        style={styles.profileImg2}
                      />
                    ) : (
                      <View style={styles.imgPicker2}>
                        <Text style={{color: '#333'}}>
                          file Name: {file.name}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ))
            : null}
          {/* {fileSelected.length > 0
            ? fileSelected.map(file => (image/jpeg"application/pdf'
                <View style={styles.imgPickerContainer}>
                  <View style={styles.imgPicker}>
                    <Text>{file.uri}</Text>
                  </View>
                  <View style={styles.imgPicker2}></View>
                  <Text style={{color: '#333'}}>file Name: {file.name}</Text>
                </View>
              ))
            : null} */}
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateTimelineComp;
