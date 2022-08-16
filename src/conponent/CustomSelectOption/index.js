import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
 import RNPickerSelect from 'react-native-picker-select';
var moment = require('moment');

import colors from '../../assets/themes/colors';
import styles from './styles';
import {color} from 'react-native-reanimated';

const CustomSelectOption = ({
  style,
  //   onChangeText,
  label,
  icon,
  //   value,
  iconPositon,
  error,
  options,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  console.log(options)

   const getFlexDirection = () => {
     if (icon && iconPositon) {
       if (iconPositon === 'left') {
         return 'row';
       } else if (iconPositon === 'right') {
         return 'row-reverse';
       }
     }
   };

  const getFlexDirection2 = () => {
    if (icon && iconPositon) {
      if (iconPositon === 'left') {
        return 'space-between';
      } else if (iconPositon === 'right') {
        return 'space-between';
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{color: '#333'}}>{label}</Text>}
      <TouchableOpacity>
        <View
          style={[
            styles.wrapper,
            {alignItems: icon ? 'center' : 'baseline'},
            {
              borderColor: getBorderColor(),
            //   flexDirection: getFlexDirection()
            },
          ]}>
          <View>{icon && icon}</View>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={value => console.log(value)}
            items={options}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: '100%',
    height: 40,
    borderColor: '#EFF0F3',
    borderRadius: 8,
    margin: -5,
    color: '#333',
  },
  inputIOS: {
    width: '100%',
    height: 40,
    borderColor: '#777',
    borderRadius: 8,
    marginTop: -5,
    color: '#333',
  },
})


export default CustomSelectOption;
