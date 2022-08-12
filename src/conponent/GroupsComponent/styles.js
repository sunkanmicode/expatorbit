import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 200,
    width: '100%',
  },
  searchWrapper: {
    borderColor: 'red',
  },
  searchText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  InputSearch: {
    color: '#000000',
    fontWeight: '800',

    // backgroundColor: colors.white,
    opacity: 0.3,
  },
  icon: {
    // color: colors.white,
    paddingRight: 10,
  },
  groupsTitle: {
    flexDirection: 'row',
  },
  groupsBtn: {
    margin: 10,
    backgroundColor: '#efefef',
    padding: 5,
    borderRadius: 5,
  },
  logoImage2: {
    height: 100,
    width: 150,
    // borderColor: colors.gray,
  },
  groupsgrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  subGroupTextTile: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '700',
  },
  groupsGridBox: {
    width: '49%',
    marginHorizontal: '1%',
    marginVertical: '1%',
    // margin: 10,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // // width: 180,
    // height: 180,
    // // backgroundColor: 'white',
    // elevation: 8,
  },
  subGroupView: {
    flexDirection: 'row',
  },
  subGroupText: {
    fontSize: 10,
    margin: 3,
    fontWeight: '700',
    color: colors.grey,
  },
  btn2: {
    width: 80,
    // padding: 2,
    // height: 40,
    backgroundColor: colors.accent,
    borderRadius: 50,
  },
  btn2Text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
