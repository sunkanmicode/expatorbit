import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 50,
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
  signBox: {
    borderWidth: 0.7,
    padding: 20,
    borderRadius: 40,
    borderColor: colors.primary,
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
  },
  infoText: {
    fontSize: 10,
  },
  infoText2: {
    fontSize: 10,
    paddingLeft: 4,
  },
});
