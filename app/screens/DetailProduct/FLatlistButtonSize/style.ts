import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  imageBackground: {
    marginTop: 10,
    width: width - 20,
    height: height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  textProduct :{
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10
  },
  textButton: {
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonSize: {
    justifyContent: "center",
    width: 100,
    height: 33,
    borderRadius: 20,
    backgroundColor: "#BEBEBE",
    marginLeft: 10,
  },

});

export default styles;
