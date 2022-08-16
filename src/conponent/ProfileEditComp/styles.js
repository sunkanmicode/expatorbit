import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
    borderColor: colors.gray,
  },
  imgWrapper: {},
  imgIcon: {
    color: '#333',
    textAlign: 'center',
  },
  signUpWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  signUp: {
    color: '#333',
    textAlign: 'center',
    fontSize: 15,
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
  title2: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '700',
    color: colors.expat,
    fontFamily: 'Poppins',
    // color:colors.grey
    // opacity: 0.5,
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
    color: '#333',
    fontWeight: '700',
  },
  infoText2: {
    fontSize: 10,
    paddingLeft: 4,
  },
  mutiStepForm: {
    flexDirection: 'row',
    marginTop: 20,
  },
  singleStepBox: {
    margin: 5,
    padding: 7,
    backgroundColor: '#efefef',
    borderColor: 10,
  },
  mutiStepText: {
    fontSize: 10,
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 7,
    borderColor: '#ABA7A7',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 5,
    paddingLeft: 10,
    color: '#333',
  },
  iconImg: {
    width: 30,
    height: 30,
    backgroundColor: colors.expat,
    borderRadius: 100,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    left: 180,
  },
  BottomSheet: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
});
