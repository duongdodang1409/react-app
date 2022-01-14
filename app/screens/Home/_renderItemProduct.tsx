import { Dimensions, TouchableWithoutFeedback, View } from "react-native";
import { Image, Text } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

// const _renderItemProduct = ({ item }: any) => {
//   const { width, height } = Dimensions.get("window");
//   return (
//     <TouchableWithoutFeedback onPress={() => DeScreen(item.key) >
//       <View style={{ flex: 2, padding: 15 }}>
//         <View style={styles.itemProduct}>
//           <Image
//             alt={"imageDt"}
//             source={{ uri: item.ProductImage }}
//             style={{ width: width / 2 - 30, height: 100, borderTopLeftRadius: 20 }} />
//           <Text style={styles.nameProduct}>
//             {item.ProductName}
//           </Text>
//           <View style={{ flex: 1, flexDirection: "row" }}>
//             <Text style={styles.price}>
//               {item.Price} đ
//             </Text>
//             <Text style={styles.priceSale}>
//               {item.PriceSale}
//             </Text>
//           </View>
//           <View style={styles.viewRating}>
//             <Icon
//               name={"star"}
//               color={"#FFCC00"}
//               style={{marginTop: 3}}
//             />
//             <View >
//               <Text style={styles.itemRating}>
//                 {item.rating}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };
export default _renderItemProduct;
