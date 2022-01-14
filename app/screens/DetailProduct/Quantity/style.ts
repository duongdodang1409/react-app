import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  roundButton1: {
    marginTop: 25,
    marginRight: 10,
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#BEBEBE"
  },
});

export default styles;
