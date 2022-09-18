import {StyleSheet, Dimensions} from 'react-native';
import colors from "../../assets/themes/colors";
const width = Dimensions.get('screen').width / 2 -70;

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    width: 250,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  categoryTest: {
    // width: 80,
    fontSize: 12,
    color: colors.grey,
    backgroundColor: colors.white,
    margin: 5,
    padding: 7,
    borderRadius: 5,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
  },
  categoryTestSelected: {
    backgroundColor: colors.accent,
    color: colors.white,
  },
  mediaBox:{
    height: 150,
    width,
    // backgroundColor: colors.grey,
    marginHorizontal: 0.5,
    marginBottom: 2,
    // padding: 20,

  },
   mediaBox2:{
    height: 250,
    width: '90%',
    alignSelf:'center',
    // backgroundColor: colors.grey,
    marginHorizontal: 20,
    marginBottom: 5,
    // padding: 20,

  }
});