import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: colors.white,
    // marginVertical: 20,
    // marginBottom:50,
  },
  timelineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  profileImg2: {
    width: "100%",
    height: '100%',
    // borderRadius: 100,
    marginRight: 8,
  },
  subHeader: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeader2: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  InputContainer: {
    height: 600,
    // backgroundColor: 'red',
    // borderRadius: 20,
    // flex: 1,
    // elevation: 5,
    // alignItems: 'flex-start',
    //   justifyContent: 'start',
  },
  InputContainer2: {
    height: '100%',
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    // elevation: 5,
    alignItems: 'flex-start',

    //   justifyContent: 'center',
  },
  input: {
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 20,
  },
  pickImageIcon: {
    marginLeft: 10,
    // height:50,
    // width:50,
    // backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgPickerContainer:{
    flexDirection: 'row',
  },
  imgPicker:{
    width: "90%",
    height: '90%',
    backgroundColor: 'red',
    margin: 10,
  }
});
