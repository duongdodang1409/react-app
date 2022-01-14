import { Text } from "native-base";
import styles from "./style";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SumQuantity = (props: { itemPrice: number, setPriceDetail: Function }) => {

  const [Price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const onPressPlus = () => {
    setPrice(Price + props.itemPrice);
    setQuantity(quantity + 1);
    props.setPriceDetail(Price + props.itemPrice);
  };

  const onPressMinus = () => {
    if (quantity != 0) {
      setPrice(Price + props.itemPrice);
      props.setPriceDetail(Price - props.itemPrice);
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <Text
        bold
        fontSize={10}
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
    </>
  );
};
export default SumQuantity;
