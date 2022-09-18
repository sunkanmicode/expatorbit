import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    // backgroundColor: colors.grey,
  },
  accountTitle: {
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
  },
  logoImage: {
    height: 40,
    width: 40,
    // alignSelf: 'center',
    // marginTop: 50,
    // borderColor: colors.gray,
  },
  accountProfile: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  acountImg: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space'
  },
  category: {
    width: 350,
    height: 320,
    padding: 20,
    backgroundColor: colors.white,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 30,
  },
  category2: {
    width: 350,
    height: 220,
    padding: 20,
    backgroundColor: colors.white,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 30,
  },
  categoryList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 10,
  },
  footerSeparator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  categoryList2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 10,
  },
});