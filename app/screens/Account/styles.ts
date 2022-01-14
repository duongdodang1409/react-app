import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    padding: 8
  },
  item: {
    flexDirection: "row",
    marginTop: 8,
    padding: 5,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  imageBackground: {
    width: width-20,
    height: height/4,
    borderTopLeftRadius :10,
    borderTopRightRadius:10
  },
  boxBackground: {
    width: width-20,
    height: 138,
    alignSelf: "center",
  }
});

export default styles;
