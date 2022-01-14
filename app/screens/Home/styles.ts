import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  imageGridView: {
    width: 40,
    height: 40,
    borderWidth: 2,
    resizeMode: "cover",
    margin: 8,
    alignSelf: "center",
    marginLeft: 10
  },
  itemProduct: {
    backgroundColor: "white",
    width: width / 2-30,
    borderRadius:20,
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image:{
    width:width -20,
    height:height/5,
    borderRadius:10
  },
  nameProduct: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 15,
    alignSelf: "flex-start",
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
  priceSale: {
    color: "#A9A9A9",
    fontSize: 10,
    marginTop: 3,
    textDecorationLine: "line-through"
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
  }


});

export default styles;
