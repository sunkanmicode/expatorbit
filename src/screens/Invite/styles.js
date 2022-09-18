import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
    wrapper:{
        flex: 1,
        padding: 30,
    },
  logoImage: {
    height: 150,
    width: 250,
    alignSelf: 'center',
    marginVertical: 50,
    // borderColor: colors.gray,
  },
 
  signBox: {
    borderWidth: 0.7,
    padding: 20,
    borderRadius: 40,
    borderColor: colors.primary,
    // opacity: 0.5,
  },
  
});
