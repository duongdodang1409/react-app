import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    fontSize: 12,
    color: '#ff0000',
  },
  textLogin: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 24,
  },
  imageBackGround: {
    width: 450,
    height: 650,
  },
  inputView: {
    width: 400,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  inputText: {
    width: 300,
    margin: 1,
    borderWidth: 1,
    padding: 30,
    marginLeft: 40,
  },
  buttonLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRight: {
    borderRadius: 3,
    width: 30,
    color: '#FFC0CB',
  },
});

export default styles;
