import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
  },
  // profileContainer: {
  //   shadowColor: '#000',
  //   // shadowOffset: {
  //   //   width: 0,
  //   //   height: 1,
  //   // },
  //   // shadowOpacity: 0.22,
  //   // shadowRadius: 2.22,

  //   elevation: 3,

  // },

  profileContainer: {
    height: 420,
    width: '100%',
    // backgroundColor: '#f1f2f2',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 0.5,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 150,
    height: 150,
    // backgroundColor: '#333',
    borderWidth: 5,
    borderColor: colors.expat,
    alignSelf: 'center',
    borderRadius: 100,
    // marginTop: 5,
  },
  profileImg2: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  admin: {
    position: 'absolute',
    bottom: -9,
    left: 158,
    alignItems: 'center',
    width: 100,
    height: 45,
    backgroundColor: colors.white,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.expat,
    borderRadius: 100,
  },

  logoImage: {
    height: 120,
    width: 120,
    // alignSelf: 'center',
    // marginTop: 20,
    // borderColor: colors.gray,
  },
  headerText: {
    margin: 20,
    alignSelf: 'center',
  },
  headerText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editBtn: {
    width: 250,
    height: 50,
    // backgroundColor:'red',
    borderWidth: 2,
    borderColor: colors.expat,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 100,
    // marginHorizontal: 50,
    marginVertical: 0,
  },
  personalInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  timeline2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
  },
  timelineText: {
    color: colors.grey,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  timelineBox: {
    width: 300,
    height: 200,
    backgroundColor: '#f1f2f2',
    margin: 10,
    borderRadius: 30,
  },
  timelineBox2: {
    width: 300,
    height: 200,
    backgroundColor: '#f1f2f2',
    margin: 10,
    borderRadius: 30,
    opacity: 0.5,
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
  logoImage2: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    // marginLeft: 5,
  },
  signBox: {
    borderWidth: 0.7,
    padding: 20,
    borderRadius: 40,
    borderColor: colors.primary,
  },
  playIcon: {
    marginVertical: 70,
    alignSelf: 'center',
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
  expatJourney: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 10,
  },
  footerSeparator: {
    // height: 0.5,
    marginVertical: 10,
    // marginBottom: 10,
    padding: 0.5,
    backgroundColor: colors.grey,
  },
  expatLocation: {
    width: '90%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  expatJourneyInfo: {
    width: '90%',
    height: 300,
    margin: 10,
    // elevation: 0.5,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
  },
  interest: {
    flexDirection: 'row',
    width: 160,
    height: 40,
    backgroundColor: 'rgba(51,118,185, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  circleBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
