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
  }
});

export default styles;
