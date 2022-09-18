import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';
const width = Dimensions.get("screen").width/2-30

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputView: {
    height: 50,
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    color: colors.grey,
  },
  logoImage: {
    height: 200,
    width: '100%',
  },
  logoImage2: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
  logoImage3: {
    height: 200,
    width: 200,
    // alignSelf: 'center',
  },
  logoImage3: {
    height: 200,
    width,
  },
  headerImg: {
    marginTop: 30,
  },
  indicator: {
    height: 10,
    width: 10,
    borderColor: colors.expat,
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 10,
    // backgroundColor: colors.expat,
  },
  createSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 10,
    color: '#333',
  },
  linkBtn: {
    paddingLeft: 5,
    color: colors.expat,
    fontSize: 10,
    fontWeight: '600',
  },
  widget: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    height: 300,
    backgroundColor: colors.expat,
    width,
    marginHorizontal: 2,
    marginBottom: 20,
    // padding: 15,
    borderRadius: 20,
  },
  card2: {
    height: 250,
    // backgroundColor: '#fff',
    width,
    // marginHorizontal: 2,
    marginBottom: 20,
    // padding: 15,
    borderRadius: 20,
  },
  logoImage3: {
    height: 200,
    width,
  },
});
