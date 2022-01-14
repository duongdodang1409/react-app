import { Dimensions, StyleSheet } from "react-native";
const {width,height}=Dimensions.get('window')
const entryBorderRadius = 8;
const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
};
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage:number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const styles = StyleSheet.create({

  cardView:{
    flex:1,
    width:width-20,
    height:height/10,
    backgroundColor:'white',
    margin:10,
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{width :0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:5
  },
  textView:{
    position:'absolute',
    bottom:10,
    margin:10,
    left:5,
  },
  image:{
    width:width,
    height:height/5,
    borderRadius:10
  },
  viewProduct:{
    width:width/2
  }
  ,
  imageProduct:{
    width:200,
    height:height/5,
    borderRadius:10
  },
  itemTitle:{
    color:'white',
    fontSize:22,
    shadowColor:'#000',
    shadowOffset:{width:0.8,height:0.8},
    shadowOpacity:1,
    shadowRadius:3,
    marginBottom:5,
    fontWeight:"bold",
    elevation:5
  },
  itemDescription:{
    color:'white',
    fontSize:12,
    shadowColor:'#000',
    shadowOffset:{width:0.8,height:0.8},
    shadowOpacity:1,
    shadowRadius:3,
    elevation:5
  },

});

export default styles;
