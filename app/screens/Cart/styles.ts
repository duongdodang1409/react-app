import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  itemProduct: {
    backgroundColor: "white",
    width: width ,
    height :height/5,
    borderRadius:20,
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  boxBackground: {
    width: width,
    height: height/6,
    alignSelf: "center",
    marginBottom:width/17
  },
  imageBackground: {
    width: width-20,
    height: height/4,
    borderTopLeftRadius :10,
    borderTopRightRadius:10
  },
  nameProduct: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 15,
    alignSelf: "flex-end",
    color: "#1F1F1F"
  },
  price: {
    padding: 3,
    fontSize: 15,
    marginLeft: 3,
    alignSelf: "flex-start",
    marginBottom: 20,
    color: "#CD5C5C",
    fontWeight: "bold"
  },
  viewRating: {
    flexDirection: "row",
    padding: 3,
    marginLeft: 3,
    marginBottom: 10,
    alignSelf :"flex-start"
  },
  itemRating:{
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: 3,
    marginBottom:20
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
    shadowOpacity: 100
  },
  textButtonOrder: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 9,
    fontWeight: "bold"
  },
});

export default styles;
