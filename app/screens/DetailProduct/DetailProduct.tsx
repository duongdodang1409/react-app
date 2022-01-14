import { Box, View, VStack } from "native-base";
import React from "react";
import styles from "../Account/styles";

const DetailProductScreen = () => {
  return (
    <View>
      <Box
        bg="gray.100"
        p="4"
        mt="70"
        ml={2}
        rounded="xl"
        style={styles.boxBackground}
        shadow={2}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white"
        }}
      />
    </View>
  );
};
export default DetailProductScreen;
