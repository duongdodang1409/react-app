import React, { useState } from "react";
import { Avatar, Box, Center, HStack, Image, Text, VStack } from "native-base";
import styles from "../styles";
import { TouchableHighlight } from "react-native";

interface ItemData {
  id: string;
  itemName: string;
  itemImage: string;
  Price: string;
  itemQuantity: number;
  itemPrice: number;
  itemColor: string;
  itemIdCart: string;
}
//deleteItem :Function
const ProductItemCart = (props: {  data: ItemData; deleteItem :Function}) => {
  return (
    <Center mt="0">
      <Box
        bg="gray.200"
        p="4"
        ml={1}
        rounded="xl"
        style={styles.boxBackground}
        shadow={3}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white"
        }}
      >
        <HStack space={10}>
          <Image
            alt="description of image"
            size="100"
            source={{ uri: props.data.itemImage }}
          />
          <VStack style={{
            left: 0,
            justifyContent: "flex-start"
          }}>
            <Text
              _dark={{
                color: "warmGray.800"
              }}
              color="coolGray.800"
              bold
            >
              {props.data.itemName}
            </Text>
            <Text
              mt={1}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200"
              }}
            >
              Số lượng: {props.data.itemQuantity}
            </Text>
            <Text
              mt={1}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200"
              }}
            >
              {props.data.itemPrice}
            </Text>
            <Text
              mt={1}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200"
              }}
            >
              {props.data.itemColor}
            </Text>

          </VStack>
        </HStack>
        <TouchableHighlight
          style={{
            alignItems: "flex-end",
            justifyContent:"flex-end",
            marginBottom:10
          }}
           onPress={() => props.deleteItem(props.data)}
        >
          <Avatar
            size={35}
            source={require("../../../assets/images/bin.png")} />
        </TouchableHighlight>
      </Box>
    </Center>
  );
};
export default ProductItemCart;
