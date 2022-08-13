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
    color: colors.white,
    backgroundColor: colors.white,
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
  groupsText:{
    color: colors.grey,
  },
  logoImage2: {
    width: 100,
    height: 100,
    borderRadius: 20,


    // borderColor: colors.gray,
  },
//   groupsgrid: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // alignItems: 'center',
//   },
  subGroupTextTile: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '700',
  },
  groupsGridBox: {
    margin: 10,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  subGroupView: {
    marginLeft: 10,
    // flexDirection: 'row',
  },
  subGroupText: {
    fontSize: 10,
    margin: 3,
    color: colors.grey
  },
  btn2:{
    width: 70,
    // padding: 5,
    // height: 40,
    backgroundColor: colors.accent,
    borderRadius: 50,
  },
  btn2Text:{
    textAlign:'center',
    color: colors.white,
    fontSize: 10,

  }
});
