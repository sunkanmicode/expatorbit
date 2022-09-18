import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from '../../CustomIcon';
import styles from './styles';


const ImagePickerCrop = ({onFileSelected, fileSelected}) => {
  const options = [
    {
      name: 'Take a camera',
      icon: <Icon type="AntDesign" name="camera" size={20} color="#333" />,
      onPress: () => {
         ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
           freeStyleCropEnabled: true,
         })
           .then(image => {
            //  fileSelected(image)
             onFileSelected(image);

             // console.log(image);
           })
           .catch(err => {
             console.log(err, 'err');
           });
      },
    },
    {
      name: 'Choose from Galary',
      icon: <Icon type="FontAwesome" name="image" size={20} color="#333" />,
      onPress: () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            // fileSelected(image)
            onFileSelected(image);

            // console.log(image);
          })
          .catch(err => {
            console.log(err, 'err');
          });
      },
    },
  ];

  return (
    <View style={styles.optionsWrapper}>
      {options.map(({name, onPress, icon}) => (
        <TouchableOpacity
          key={name}
          style={styles.pickerOption}
          onPress={onPress}>
          {icon}
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ImagePickerCrop
