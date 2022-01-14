import { Image, Text } from "native-base";
import styles from "./style";
import React from "react";

const ImageProduct = (props: { itemImage: string,ItemProductName: string }) => {
  return (
    <>
      <Image
        alt="description of image"
        source={{ uri: props.itemImage }}
        style={styles.imageBackground}
      />
      <Text
        style={styles.textProduct}
      >{props.ItemProductName}
      </Text>
    </>
  );
};
export default ImageProduct;
