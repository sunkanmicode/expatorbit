import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import colors from '../../assets/themes/colors';
import styles from './styles';

const Input = ({style, onChangeText, label, icon, value, iconPositon, error, ...props}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = ()=>{
    if(icon && iconPositon){
      if(iconPositon === "left"){
        return "row";
      }else if (iconPositon === "right"){
        return 'row-reverse'
      } 
    }
  }
  const getBorderColor =() =>{
    if(focused){
      return colors.primary 
    }
    if(error){
      return colors.danger
    }else{
      return colors.grey
    }
  }



  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{color:'#333'}}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {  alignItems: icon? 'center': "baseline"},
          {borderColor:getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={()=>{
            setFocused(true)
          }}
          onBlur={()=>{
            setFocused(false)
          }}
          {...props}
        />
      </View>
      {/* {error && <Text style={styles.error}>{error}</Text>} */}
    </View>
  );
};

export default Input
