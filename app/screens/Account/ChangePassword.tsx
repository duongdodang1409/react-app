import React, { useEffect, useState } from "react";
import { Box, Heading, NativeBaseProvider, Text } from "native-base";
import FormChangePassword from "./FormChangePassword";
import asyncStorage from "../../services/deviceStorage";
import updateUserService from "../../services/UpdateUser";

interface detailUserInterFace {
  UserName: string,
  Password: string,
  avatar: string,
  phone: string,
  id: string,
  cart: any,
  gmail: string,
  fullName: string,
  address: string,
  gender: any,
  passwordPresentScreen: string,
  passwordConfirm: string,
  passwordNew: string,

}

const ChangePassword = (props: {navigation:any, onChangeScreen: Function }) => {
  const [notify,setNotify] =useState<string>()
  const [updatePasswordData , setUpdatePassword] = useState<detailUserInterFace>({
    UserName: "",
    fullName: "",
    Password: "",
    avatar: "",
    cart: undefined,
    gender: undefined,
    gmail: "",
    id: "",
    phone: "",
    address: "",
    passwordPresentScreen: "",
    passwordNew: "",
    passwordConfirm: ""
  });
  useEffect(() => {
    const unSubscribe = props.navigation.addListener("focus", () => {
      asyncStorage.getItem("detailUser").then((res: any) => {
        //console.log("default", JSON.parse(res));
        setUpdatePassword(JSON.parse(res));
      });
    });
    return unSubscribe;
  }, [props.navigation]);
  const UpdatePassword = (data: any) => {
    console.log("[data]", data);
    updateUserService.PutUser(data).then((res: any) => {
      console.log(res.status);
      if (res.status) {
        setNotify("Cập nhật thành công");
      } else {
        setNotify("Cập nhật ko thành công");
      }
    });
  };
  return (
    <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p="2"
        py="8"
        w="100%"
        mx="1">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.400">
          <Text
            alignSelf={"center"}
            fontSize={"xl"}
          >
            Đổi mật khẩu
          </Text>
        </Heading>
        <Text
          ml={2}
          fontSize={"xs"}
          color={"red.600"}
        >
          {notify}
        </Text>
        <FormChangePassword navigation={props.navigation} defaultValue={updatePasswordData} onSubmit={UpdatePassword} />
      </Box>
    </NativeBaseProvider>
  )
}
export default ChangePassword;
