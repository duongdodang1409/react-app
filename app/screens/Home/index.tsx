import { Dimensions } from "react-native";
import React, { useState } from "react";
import { Box, Center, Input, NativeBaseProvider, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeCarousel from "./Carousel";
import HomeCategories from "./Categories";
import HomeProducts from "./Products";

interface CartInterFace {
  id: String;
  ProductName: String;
  timeStamp: String;
  Price: Number;
  ProductImage: String;
}

const HomeScreen = (props: {navigation: any}) => {
  const {width, height} = Dimensions.get('window');
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const findDimensions = (layout: any) => {
    const {x, y, width, height} = layout;
    setContainerWidth(width);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box onLayout={event => findDimensions(event.nativeEvent.layout)}>
          <ScrollView>
            <Input
              mt={6}
              mb={2}
              variant="rounded"
              color={'coolGray.600'}
              placeholderTextColor="coolGray.600"
              placeholder="Search"
              style={{borderRadius: 50, width: width}}
              InputRightElement={
                <Icon
                  name="search"
                  size={22}
                  color={'gray'}
                  style={{marginRight: 10}}
                />
              }
            />

            <HomeCarousel />

            <HomeCategories />

            {/*<FlatList*/}
            {/*  data={dataProduct}*/}
            {/*  horizontal={true}*/}
            {/*  showsHorizontalScrollIndicator={false}*/}
            {/*  snapToInterval={width / 2}*/}
            {/*  renderItem={_renderItemProduct}*/}
            {/*/>*/}

            <HomeProducts
              parentWidth={containerWidth}
              navigation={props.navigation}
            />
          </ScrollView>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
