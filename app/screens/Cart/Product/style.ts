import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  stackItem : {
    height: height,
    width: width,
    borderRadius: 10,
    marginBottom: 10
  },
  flatList : {
    width: width,
    height: height-height/10
  },
  buttonOrder: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: height / 2.2,
    width: 60,
    height: 60,
    padding: 5,
    borderRadius: 70,
    backgroundColor: "#367517",
    alignSelf: "flex-end",
    shadowOpacity: 100,
    shadowRadius: 10,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  textButtonOrder: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 9,
    fontWeight: "bold"
  },
})
export default styles
