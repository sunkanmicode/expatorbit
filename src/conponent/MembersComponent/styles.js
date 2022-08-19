import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
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
  //category
  categoryContainer: {
    // width: 250,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  categoryTest: {
    fontSize: 10,
    color: colors.black,
    fontWeight: 'bold',
    backgroundColor: colors.white,
    margin: 5,
    padding: 7,
    borderRadius: 5,
    elevation: 5,
  },
  categoryTestSelected: {
    backgroundColor: colors.expat,
  },
  //member list
  profileImg:{
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  listCoontainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginVertical: 15,
  },
  listTitle:{
    flexDirection:'row',
    alignItems:'center',
    width: 300,
  },
  iconWrapper:{
    width: 30,
    height: 30,
    padding: 7,
    borderRadius: 100,
    backgroundColor:colors.expat,
  },

  //old styles
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
  groupsText: {
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
    flexDirection: 'row',
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
    color: colors.grey,
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
