import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 200,
    width: "100%",
    alignSelf: 'center',
    // marginTop: 20,
    // borderColor: colors.gray,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '700',
    color: '#231f20',
    fontFamily: 'Poppins-Regular',
    // color:colors.grey
    // opacity: 0.5,
  },
  signBox: {
    borderWidth: 0.7,
    padding: 20,
    borderRadius: 40,
    borderColor: colors.primary,
    margin: 30,
    // opacity: 0.5,
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
    fontWeight: '600',
  },
  infoText: {
    fontSize: 10,
    color: '#333',
  },
  infoText2: {
    fontSize: 10,
    paddingLeft: 4,
    color: '#333',
  },
  error: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    // color:'#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
