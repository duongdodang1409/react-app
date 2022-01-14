import React from 'react-native'
import {View,StyleSheet,Text,Dimensions} from "react-native";
import {Image} from "native-base"
import styles from "./style";
const {width,height}=Dimensions.get('window')
const carouselItem = ({item}:any)=>{
  return(
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.src }}/>
      <View>
        <Text style={styles.textView}>{item.context}</Text>
      </View>
    </View>
  )
}
export default carouselItem;
