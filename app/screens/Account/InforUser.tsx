import React, { useEffect, useState } from "react";
import { Box, Center, Container, Heading, NativeBaseProvider, Text, VStack } from "native-base";
import asyncStorage from "../../services/deviceStorage";
import updateUserService from "../../services/UpdateUser";
import BoxAccount from "./BoxAccount";
import FormAccount from "./FormUser";

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

const InfoUser = (props: { onChangeScreen: Function, navigation: any }) => {

  const [notify, setNotify] = useState<string>();
  const [updateData, setUpdateFormData] = useState<detailUserInterFace>({
    userName: "",
    fullName: "",
    Password: "",
    avatar: "",
    cart: undefined,
    gender: undefined,
    gmail: "",
    id: "",
    phone: "",
    address: ""
  });
  useEffect(() => {
    const unSubscribe = props.navigation.addListener("focus", () => {
      asyncStorage.getItem("detailUser").then((res: any) => {
        setUpdateFormData(JSON.parse(res));
      });
    });
    return unSubscribe;
  }, [props.navigation]);

  const UpdateUserName = (data: any) => {
    updateUserService.PutUser(data).then((res: any) => {
      if(res.status){
        setNotify("Cập nhật thành công")
      }
      else {
        setNotify("Cập nhật thất bại")
      }
    });
  };
  const UpdateUser = () => {
    return (
      <Container>
        <Heading size="xl" fontWeight="300" mt={2} >
          <Text
            mt={3}
            ml={2}
            color="red.600"
          >
            {notify}
          </Text>
        </Heading>
        <Box h="40" style={{ position: "absolute" }}>
          <Box
            safeArea
            flex={1}
            p="2"
            py="8"
            w="90%"
            mx="1">
            <Center mt="1">
              <BoxAccount
                ImageAvatar={updateData?.avatar}
                FullName={updateData?.fullName}
                gmail={updateData?.gmail}
              />
            </Center>
            <VStack
              space={3}
              mt="19">
              <FormAccount
                defaultValue={updateData}
                onSubmit={UpdateUserName} />
            </VStack>
          </Box>
        </Box>
      </Container>
    );
  };
  return (
    <NativeBaseProvider>
      <UpdateUser />
    </NativeBaseProvider>
  );
}
export default InfoUser;
