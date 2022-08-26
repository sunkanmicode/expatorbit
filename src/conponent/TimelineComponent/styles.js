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
    width: 45,
    height: 45,
    borderRadius: 100,
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
  InputContainer: {
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    elevation: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  // input: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   color: colors.black,
  //   marginHorizontal: 20,
  // },
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
  TimelineImg: {
    width: '100%',
    height: 400,
    backgroundColor: 'red',
    // marginRight: 10,
  },
  icons: {
    flexDirection: 'row',
    width: 120,
    height: 50,
    // backgroundColor:'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  comment: {
    width: 400,
    height: 120,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 50,
    // padding: 20,
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
  },
});
