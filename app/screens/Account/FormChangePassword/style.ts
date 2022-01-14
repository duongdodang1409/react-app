import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  boxBackground: {
    width: width-20,
    height: 138,
    alignSelf: "center",
  }
});
export default styles;
