import { FlatList, Image, Text } from "native-base";
import styles from "./style";
import React, { useEffect, useState } from "react";
import { DataButtonSize } from "../../../Data/Data";
import { TouchableOpacity } from "react-native";

const FlatListButton = (props: {onChangeColor:Function}) => {

  const [selectedId, setSelectedId] = useState("bd7acbea-c1b1-46c2-aed5-3ad53abb28ba")

  const handleColorItemClick = (item: any) => {
    setSelectedId(item.id)
  }

  useEffect(() => {
      const elementColor = DataButtonSize.find(element => element.id === selectedId)
       props.onChangeColor(elementColor)
    }, [selectedId])

  const renderButton = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleColorItemClick(item)}
        style={{
          ...styles.buttonSize,
          ...{
            backgroundColor: item.id === selectedId ? "#367517" : "#BEBEBE"
          }
        }}
      >
        <Text
          style= {{
            ...styles.textButton,
            ...{
              color: item.id === selectedId ? "white" : "black"
            }
          }}

        >{item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        horizontal={true}
        data={DataButtonSize}
        renderItem={renderButton}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </>
  );
};
export default FlatListButton;
