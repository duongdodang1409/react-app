import React, { useEffect, useState } from "react";
import { Avatar, Box, Center, Container, FlatList, HStack, Image, Text, VStack, ZStack } from "native-base";
import { Dimensions, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import asyncStorage from "../../services/deviceStorage";

interface detailUserInterFace {
  userName: string,
  Password: string,
  avatar: string,
  phone: string,
  id: string,
  cart: any,
  gmail: string,
  fullName: string,
  address: string,
  gender: any,
}

const AccountList = (props: {
  navigation:any,
  onChangeScreen: Function,
  handleLogout: Function,
  }) => {
  const [user,setUser] =useState<detailUserInterFace>(
    {
      userName: "",
      fullName: "",
      Password: "",
      avatar: "https://cdn.fakercloud.com/avatars/arindam__128.jpg",
      cart: undefined,
      gender: undefined,
      gmail: "",
      id: "",
      phone: "",
      address: ""
    }
  )
  const background = require("../../assets/images/backgroundaccount.jpg");
  const renderScreen = [
    { src: require("../../assets/images/personicon.png"), context: "Thông tin cá nhân", key: "1" },
    { src: require("../../assets/images/okhoa.png"), context: "Đổi mật khẩu", key: "2" },
    { src: require("../../assets/images/chinhsach.jpg"), context: "Chính sách bảo mật", key: "3" },
    { src: require("../../assets/images/login1.png"), context: "Đăng xuất", key: "4" }
  ];

  useEffect(() => {
    const unSubscribe = props.navigation.addListener("focus", () => {
      asyncStorage.getItem("detailUser").then((res: any) => {
        setUser(JSON.parse(res));
      });
    });
    return unSubscribe;
  }, [props.navigation]);
  function changeScreen(x: string) {
    if (x === "2") {
      props.onChangeScreen("ChangePassword");
    } else if (x === "1") {
      props.onChangeScreen("InfoUser");
    } else if (x === "3") {
      props.onChangeScreen("PrivacyPolicy");
    } else {
      props.handleLogout();
    }
  }

  const InputAccount = () => {

    const { width } = Dimensions.get("window");
    const height = (width * 100) / 70;
    return (
      <Container>
        <View style={{ justifyContent: "flex-start", width, height }}>
          <ZStack mt="0" rounded="lg">
            <Image
              alt="description of image"
              rounded="lg"
              source={background}
              style={styles.imageBackground}
            />
            <Center mt="60">
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
              >
                <HStack space={10}>
                  <Image
                    size={"67px"}
                    alt={"Image avatar Account"}
                    src={user.avatar}
                    borderRadius={100}
                  />
                  <VStack style={{ left: 0, justifyContent: "flex-start" }}>
                    <Text
                      _dark={{
                        color: "warmGray.800"
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {user.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200"
                      }}
                    >
                      {user.phone}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Center>
          </ZStack>
          <View style={{ marginTop: 200 }}>
            <FlatList
              style={{ marginTop: 70 }}
              data={renderScreen}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => changeScreen(item.key)}>
                  <View>
                    <Box
                      borderBottomWidth="1"
                      _dark={{
                        borderColor: "gray.600"
                      }}
                      borderColor="coolGray.200"
                      pl="3"
                      pr="5"
                      py="2"
                    >
                      <HStack
                        space={3}
                        justifyContent="flex-start">
                        <Avatar
                          size={"10"}
                          source={item.src} />
                        <VStack>
                          <Text
                            _dark={{
                              color: "warmGray.50"
                            }}
                            color="coolGray.800"
                            bold
                          >
                            {item.context}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </View>
      </Container>
    );
  };
  return (
    <VStack space={3} mt="5">
      <InputAccount />
    </VStack>
  );
};
export default AccountList ;
