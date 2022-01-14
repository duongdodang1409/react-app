import { Avatar, Box, HStack, Image, Text, VStack } from "native-base";
import styles from "./style";
import React from "react";

const BoxAccount = (props: { FullName: string, gmail: string, ImageAvatar :string }) => {
  return (
    <>
      <Box
        bg="gray.100"
        p="4"
        mt="10"
        ml={2}
        rounded="xl"
        style={styles.boxBackground}
        shadow={2}
      >
        <HStack space={6}>
          <Image
          size={"67px"}
          alt={"Image Avatar"}
          src={props.ImageAvatar}
          borderRadius={100}
          />
          <VStack style={{ left: 0, justifyContent: "flex-start" }}>
            <Text
              _dark={{
                color: "warmGray.800"
              }}
              color="coolGray.800"
              bold
            >{props.FullName}
            </Text>
            <Text
              underline
              fontSize={"lg"}
              color="green.500"
            >
              {props.gmail}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
export default BoxAccount;
