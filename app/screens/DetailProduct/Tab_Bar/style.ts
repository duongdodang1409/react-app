import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  colorUnderText: {
    marginTop:3,
    width:width/4,
    height:height/18,
    backgroundColor: "#BEBEBE",
    borderTopWidth:0.1
  },
  textTab:{
    justifyContent:"center",
    alignSelf:'center',
    borderRadius:20,
    backgroundColor :'#e2fdd7',
    padding: 20
  },
  viewContext: {
    width: width,
    height: height / 6,
    backgroundColor: "#f6f6f6",

  },
});

export default styles;
