import React from "react";
import { AspectRatio, Box, Heading, HStack, Stack, Text } from "native-base";
import { Image } from "react-native";

interface ItemData {
  id: string;
  ProductName: string;
  ProductImage: string;
  Price: string;
  rating: number;
  sold: number;
  timeStamp: string;
}

const numeral = require('numeral');

const ProductItem = (props: {parentWidth: number; data: ItemData}) => {
  const itemMargin = 6;
  const itemWidth = (props.parentWidth - itemMargin * 4) / 2;

  return (
    <Box
      width={itemWidth}
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      style={{margin: itemMargin}}
      _light={{
        backgroundColor: 'gray.50',
      }}>
      <Box>
        <AspectRatio w="100%" ratio={1}>
          <Image
            source={{
              uri: props.data.ProductImage,
            }}
          />
        </AspectRatio>
      </Box>
      <Stack p="3" space={1}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.data.ProductName}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: 'violet.500',
            }}
            _dark={{
              color: 'violet.400',
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            {numeral(props.data.Price).format('0,0')}
          </Text>
        </Stack>
        <Text fontWeight="400">Đã bán: {props.data.sold} chiếc</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {props.data.timeStamp}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProductItem;
