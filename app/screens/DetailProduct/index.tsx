import React, { useState } from "react";
import { Box, FormControl, NativeBaseProvider, Text, View } from "native-base";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import DetailTab from "./Tab_Bar";
import DetailModal from "./Rating";
import ImageProduct from "./ImageNameProduct";
import FlatListButton from "./FLatlistButtonSize";
import Icon from "react-native-vector-icons/FontAwesome";
import asyncStorage from "../../services/deviceStorage";

interface itemButtonInterFace {
  title: string,
  id: string
}

const DetailProductScreen = (props: { navigation: any, route: any }) => {

  const [defaultRating] = useState(3);
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { itemId, itemProductName, itemImage, itemPrice, itemRating } = props.route.params;
  const [Price, setPrice] = useState<number>(itemPrice);
  let cart:any  =[]
  let itemButton: itemButtonInterFace;
  const numeral = require("numeral");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const ChangeColor = (value: any) => {
    itemButton = value;
  };
  const setModal = (value: boolean) => {
    setModalVisible(value);
  };

  const DetailProductOutput = () => {

    const onPressPlus = () => {
      setPrice(Price + itemPrice);
      setQuantity(quantity + 1);
    };
    const onPressMinus = () => {
      if (quantity != 0) {
        setPrice(Price - itemPrice);
        setQuantity(quantity - 1);
      }
    };
    const AddProduct = () => {
      if (itemButton == null) {
      } else {
        const cartElement = {
          itemId: itemId,
          itemName: itemProductName,
          itemImage: itemImage,
          itemRating: defaultRating,
          itemPrice: Price,
          itemQuantity: quantity,
          itemColor: itemButton.title,
          itemIdCart: (itemId + Math.random()).toString()
        };
        if (asyncStorage.getItem("cart")) {
          asyncStorage.getItem("cart").then((res: any) => {
            if(res== []){
              cart.push(cartElement);
              asyncStorage.saveItem("cart", JSON.stringify(cart));
            }
            else {
              console.log("[resF]",res)
              cart =[...cart,...JSON.parse(res)];
              cart.push(cartElement);
              asyncStorage.saveItem("cart", JSON.stringify(cart));
            }
          });
        } else {
          cart.push(cartElement);
          asyncStorage.saveItem("cart", JSON.stringify(cart));
        }
      }
    };
    return (
      <>
        <DetailModal isModalVisible={isModalVisible} stopModal={setModal} />
        <View
          style={{
            alignItems: "center"
          }}
        >
          <ImageProduct itemImage={itemImage} ItemProductName={itemProductName} />
          <Box
            rounded="xl"
            style={styles.boxBackground}
          >
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500
                  }}>
                  Màu
                </FormControl.Label>
              </FormControl>
              <View>
                <FlatListButton onChangeColor={ChangeColor} />
              </View>
              <View
                style={styles.textColor}>
                <Text
                  bold
                  fontSize={11}
                >
                  Số lượng
                </Text>
                <TouchableOpacity
                  onPress={onPressMinus}
                  style={styles.roundButton1}>
                  <Icon
                    name={"minus"} />
                </TouchableOpacity>
                <Text
                  style={{
                    marginTop: 30,
                    marginRight: 10
                  }}
                >
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={onPressPlus}
                  style={styles.roundButton1}>
                  <Icon name={"plus"} />
                </TouchableOpacity>
              </View>
          </Box>
          <DetailTab />
          <View
            style={styles.viewContextRating}>
            <Text
              style={styles.textRating}
            >
              Đánh giá
            </Text>
            <Text
              style={styles.detailRating}
            >
                ({itemRating})
              </Text>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.buttonRating}>
                <Text
                  style={styles.textButtonOrder}>
                  Đánh giá
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={styles.viewFooter}>
              <Text
                style={styles.textFooterPrice}
              >
                {numeral(Price).format('0,0')}
              </Text>
              <TouchableOpacity
                style={styles.buttonOrder}
                onPress={AddProduct}>
                <Text
                  style={styles.textButtonOrder}>
                  Thêm vào giỏ hàng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    };
    return (
      <NativeBaseProvider>
        <DetailProductOutput />
      </NativeBaseProvider>
    );
  };
export default DetailProductScreen;
