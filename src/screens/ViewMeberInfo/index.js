import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from '../../conponent/CustomIcon';
// import Icon from '../../CustomIcon';
import styles from './styles';

const IMAGEDEFAULT =
  'https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png';

const ViewMemberInfo = props => {
  const {params: {item = {}} = {}} = useRoute();
//   const route = useRoute();
  console.log(item, 'route5000');
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: IMAGEDEFAULT}} style={styles.profileImg} />
        <Text style={{color: '#333'}}>Peson Name</Text>
        <Text style={{color: '#333'}}>
          Lorem ipsum dolor sit amet consectetur
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'center',
          width: 300,
          // height: 20,
          marginVertical: 25,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.memberList}>
            <Icon type="AntDesign" name="user" size={25} color="#fff" />
          </View>
          {/* <Text style={{color: '#333'}}>Connected</Text> */}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.memberList}>
            <Icon type="Feather" name="folder-plus" size={25} color="#fff" />
          </View>
          {/* <Text style={{color: '#333'}}>Follow</Text> */}
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.memberList}>
            <Icon type="AntDesign" name="wechat" size={25} color="#fff" />
          </View>
          {/* <Text style={{color: '#333'}}>Message</Text> */}
        </View>
      </View>
    </View>
  );
};

export default ViewMemberInfo;
