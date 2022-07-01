import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/themes/colors';
import styles from './styles';

const CustomButton = ({
 secondary,
 primary,
 title,
 loading,
 disabled,
 danger,
 onPress,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getBgColor = () => {
    if (disabled){
        return colors.grey;
    }
      if (primary) {
        return colors.primary;
      }
        if (danger) {
        return colors.danger;
        } 
        if(secondary){
        return colors.secondary;

        }
    
  };

  

  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      disabled={disabled}
      onPress={onPress}>
      <View style={styles.loaderSection}>
       {loading && <ActivityIndicator color={primary? colors.secondary: colors.primary} />}
        {title && (
          <Text style={{color: disabled ? 'black' : colors.white, paddingLeft: loading?5:0}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
