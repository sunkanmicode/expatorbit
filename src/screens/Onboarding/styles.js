import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputView: {
    height: 50,
    width: 350,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    
  },
  input: {
    color: '#333',
    marginLeft: 20,
    flex: 1,
  },
  indicator: {
    height: 10,
    width: 10,
    borderColor: colors.expat,
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 10,
    // backgroundColor: colors.expat,
  },
  createSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 10,
    color: '#333',
  },
  linkBtn: {
    paddingLeft: 5,
    color: colors.expat,
    fontSize: 10,
    fontWeight: '600',
  },
});