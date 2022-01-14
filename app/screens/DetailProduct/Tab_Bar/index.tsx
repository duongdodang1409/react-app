import React, { useState } from "react";
import { FlatList, ScrollView, Text } from "native-base";
import { TouchableOpacity, View } from "react-native";
import styles from "./style";

const tabBarLayout = [
    { context: "Chi tiết", key: 1 },
    { context: "Đánh giá", key: 2 },
    { context: "Chính Sách", key: 3 },
    { context: "Đê Xuất", key: 4 }
  ]
;


const DetailTab = () => {
  const [idKey, setIdKey] = useState<any>();

  const renderTabBar = () => {
    switch (idKey) {
      case  4 :
        return (
          "Đề Xuất"
        );
      case 2:
        return (
          "Đánh giá"
        );
      case 3 :
        return (
          "Chính Sách"
        );
      default :
        return (
          "Chi tiết"
        );
    }
  };

  const HandTopic = (item: any) => {
    setIdKey(item.key);
  };
  const renderTab = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => HandTopic(item)}
        style={{
          ...styles.colorUnderText,
          ...{
            backgroundColor: item.key === idKey ? "#f6f6f6" : "#c0eaac"
          }
        }}
      >
        <Text
          style={{
            fontSize: 13,
            alignSelf: "center",
            fontWeight: "bold"

          }}>
          {item.context}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={tabBarLayout}
        horizontal={true}
        renderItem={renderTab}
        keyExtractor={(item) => item.key}
        extraData={setIdKey}
      />
      <ScrollView>
        <View
          style={styles.viewContext}>
          <Text>{renderTabBar()}</Text>
        </View>
      </ScrollView>
    </>)
    ;
};

export default DetailTab;
