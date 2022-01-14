import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover"
  }
});

export default styles;
