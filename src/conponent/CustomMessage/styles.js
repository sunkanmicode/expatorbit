import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 50,
    paddingHorizontal: 5,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  loaderSection: {
    flexDirection: 'row',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
