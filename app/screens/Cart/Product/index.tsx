import React, { useEffect, useState } from "react";
import { Avatar, Center, FlatList, Text, View, ZStack } from "native-base";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { Cart } from "../../../Data/Data";
import ProductItemCart from "./Item";
import styles from "../../Cart/Product/style";
import postProductService from "../../../services/Product";
import Icon from "react-native-vector-icons/FontAwesome";
import asyncStorage from "../../../services/deviceStorage";


const CartProducts = (props: { navigation: any }) => {

  const [cart, setCart] = useState<any>();

  useEffect(() => {
    const unSubscribe = props.navigation.addListener("focus", () => {
      asyncStorage.getItem("cart").then((res: any) => {
        console.log(JSON.parse(res));
        setCart(JSON.parse(res));
      });
    });
    return unSubscribe;
  }, [props.navigation]);

  const order = () => {
    console.log(Cart);
    postProductService.PostProduct(Cart).then((res: any) => {
      console.log(res.status);
      if (res.status == 201) {
        console.log("Thêm thành công");
      } else {
        console.log("Thêm ko thành công");
      }
    });
  };

  const deleteCartItem = (item: any) => {
    const cartClone = cart.filter((element: { itemIdCart: String; }) => element.itemIdCart !== item.itemIdCart)
    setCart(cartClone);
    asyncStorage.saveItem("cart", JSON.stringify(cartClone));
  };

  return (
    <ZStack style={styles.stackItem}>
      <FlatList
        style={styles.flatList}
        data={cart}
        renderItem={({ item }) => (
          <View>
            <ZStack>
              <ProductItemCart data={item} deleteItem={deleteCartItem} />
            </ZStack>
          </View>
        )
        }
      />
      <TouchableOpacity
        onPress={order}
        style={styles.buttonOrder}>
        <Center>
          <Icon name={"shopping-cart"}
                size={25}
                color="white"
          />
          <Text
            style={styles.textButtonOrder}>
            Đặt hàng
          </Text>
        </Center>
      </TouchableOpacity>
    </ZStack>
  )
};
export default CartProducts;
