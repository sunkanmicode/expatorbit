import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    // borderColor: colors.gray,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  error:{
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  }
});
