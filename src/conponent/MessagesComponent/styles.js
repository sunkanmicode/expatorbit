import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 200,
    width: '100%',
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  groupsText: {
    color: colors.grey,
  },
  logoImage2: {
    width: 80,
    height: 80,
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
  messContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },
  groupsGridBox: {
    // margin: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  subGroupView: {
    // marginLeft: 10,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  subGroupText: {
    fontSize: 10,
    margin: 3,
    color: '#333',
  },
  btn2: {
    width: 70,
    // padding: 5,
    // height: 40,
    backgroundColor: colors.accent,
    borderRadius: 50,
  },
  btn2Text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 10,
  },
});
