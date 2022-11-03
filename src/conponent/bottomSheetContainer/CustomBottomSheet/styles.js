import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    // paddingTop: 20,
    justifyContent: 'center',
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  optionsWrapper: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 15,
    paddingLeft: 17,
    color: colors.grey,
  },
  selected: {
    color: 'red',
  },
});