import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 20,
    // borderColor: colors.gray,
  },
  title: {
    fontSize: 20,
    // textAlign: 'center',
    paddingTop: 20,
    fontWeight: '700',
    color: '#231f20',
    fontFamily: 'Poppins',
    // opacity: 0.5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.grey,
  },
  signBox: {
    borderWidth: 0.7,
    padding: 20,
    borderRadius: 40,
    borderColor: colors.primary,
  },
  form: {
    paddingTop: 20,
  },
  forgotPassword: {},
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: 10,
    paddingTop: 0,
    paddingBottom: 20,
    color: colors.black,
  },
  createSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  linkBtn: {
    paddingLeft: 5,
    color: colors.black,
    fontSize: 10,
  },
  infoText: {
    fontSize: 10,
  },
  infoText2: {
    fontSize: 10,
    paddingLeft: 4,
  },
  mutiStepForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  singleStepBox: {
    margin: 5,
    padding: 5,

    backgroundColor: '#efefef',
    borderColor: 10,
  },
  mutiStepText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#333',
  },
  profileIcon: {
    alignSelf: 'center',
    marginTop: 15,
  },
  profileIconBox: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    // opacity: 0.1,
  },
  profileIconText: {
    textAlign: 'center',
    color: '#333',
  },
  // followers:{
  //   justifyContent:"center",
  //   alignContent:'center',
  //   backgroundColor:'red',
  //   textAlign:"justified"

  // }
  subTextTile: {
    flexDirection: 'row',
    color: '#333',
  },
  aboutMeTitle: {
    paddingTop: 20,
    paddingHorizontal: 5,
    paddingBottom: 10,
    marginLeft: 10,
    fontSize: 11,
    fontWeight: '900',
    color: '#333',
  },
  aboutMe: {
    borderBottomColor: '#444',
    borderBottomWidth: 0.5,
    padding: 10,
    margin: 10,
  },
  aboutMeTextTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#333',
  },
});
