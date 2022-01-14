import React from "react";
import { Box, Text, View } from "native-base";

const ItemNotification = (title: any, body: any) => {
  //const background = require("../assets/images/backgroundhome.jpg");
  return (
    <Box>
      {/*//<Image source={background} />*/}
      <View>
        <Text>
          {title}
        </Text>
        <Text>
          {body}
        </Text>
      </View>
    </Box>
  );
};
export default ItemNotification;
