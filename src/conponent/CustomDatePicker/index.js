import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
var moment = require('moment');

import colors from '../../assets/themes/colors';
import styles from './styles';
import { color } from 'react-native-reanimated';

const CustomDatePicker = ({
  style,
//   onChangeText,
  label,
  icon,
//   value,
  iconPositon,
  error,
  datePickerOpen,
  setDatePickerOpen,
  date,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

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
      <TouchableOpacity
        onPress={() => {
          setDatePickerOpen(!datePickerOpen);
        }}>
        <View
          style={[
            styles.wrapper,
            {alignItems: icon ? 'center' : 'baseline'},
            {
              borderColor: getBorderColor(),
              justifyContent: getFlexDirection2(),
            },
          ]}>
          <Text style={{color: '#333', margin: 10}}>
            {moment(date).format('MMM Do YYYY')}
          </Text>
          <View>{icon && icon}</View>

          {datePickerOpen && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              //   mode={mode}
              //   is24Hour={true}
              // onChange={onChange}

              {...props}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDatePicker;

