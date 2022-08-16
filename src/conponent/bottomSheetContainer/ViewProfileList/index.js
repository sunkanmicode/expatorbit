import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../CustomIcon';
import CustomModel from '../../CustomModel';
import styles from './styles';

const ViewProfileList = ({
  onFileSelected,
  modelVisible,
  setModelVisible,
  setModelVisible2,
}) => {
  const [categoriesIndex, setCategoriesIndex] = useState(2);
  // const [modelVisible, setModelVisible] = useState(false);
  const options = [
    {
      name: 'Report',
      onPress: () => {},
    },
    {
      name: 'Remove connection',
      onPress: () => {
        setModelVisible(true);
      },
    },
    {
      name: 'Block',
      onPress: () => {
        setModelVisible(true);
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

export default ViewProfileList;
