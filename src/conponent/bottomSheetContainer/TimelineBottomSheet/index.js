import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../CustomIcon';
import CustomModel from '../../CustomModel';
import styles from './styles';

const TimelineBottomSheet = ({
  onFileSelected,
  modelVisible,
  setModelVisible,
  setModelVisible2,
}) => {
  const [categoriesIndex, setCategoriesIndex] = useState(3);
  // const [modelVisible, setModelVisible] = useState(false);
  const options = [
    {
      name: 'Copy Link',
      onPress: () => {},
    },
    {
      name: 'Report post',
      onPress: () => {
        // setModelVisible(true);
      },
    },
    {
      name: 'Download',
      onPress: () => {
        // setModelVisible(true);
      },
    },
    {
      name: 'Delete Post',
      onPress: () => {
        // setModelVisible(true);
      },
    },
  ];

  return (
    <View style={styles.optionsWrapper}>
      {options.map((list, index) => (
        <TouchableOpacity
          key={list.name}
          style={styles.pickerOption}
          onPress={list.onPress}>
          <Text
            style={[styles.text, categoriesIndex === index && styles.selected]}>
            {list.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TimelineBottomSheet;
