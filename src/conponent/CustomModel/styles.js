import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modelView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 50,
    minHeight: 200,
  },
//   header: {
//     flexDirection: 'row',
//     padding: 15,
//     alignItems: 'center',
//     width: '100%',
//     justifyContent: 'space-between',
//   },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    color: colors.expat,
    alignSelf: 'center',
  },
  title1: {
    fontSize: 15,
    color: colors.expat,
    alignSelf: 'center',
  },
//   body: {
//     minHeight: 300,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   footerSeparator: {
//     height: 0.5,
//     backgroundColor: colors.grey,
//   },
//   footerItems: {
//     width: '100%',
//     padding: 10,
//   },
//   footer: {
//     justifyContent: 'space-evenly',
//     paddingVertical: 7,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   footerText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   termsView: {
//     width: 5,
//     height: 5,
//     borderRadius: 100,
//     backgroundColor: colors.grey,
//   },
  profileImg: {
    width: 50,
    height: 50,
    // backgroundColor: '#333',
    borderWidth: 5,
    borderColor: colors.expat,
    alignSelf: 'center',
    borderRadius: 100,
    // marginTop: 5,
  },
  imgPicture: {
    margin: 20,
  },
});
