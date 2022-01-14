import * as React from "react";
import { Box, NativeBaseProvider } from "native-base";
import AccountList from "./Account";
import ChangePassword from "./ChangePassword";
import InfoUser from "./InforUser";
import asyncStorage from "../../services/deviceStorage";
import { useEffect } from "react";

const AccountScreen = (props: { navigation: any }) => {

  const changeScreen = (screen: string) => {
    switch (screen) {
      case "PrivacyPolicy":
        props.navigation.navigate("PrivacyPolicy")
        break
      case "ChangePassword":
        props.navigation.navigate("ChangePassword")
        break
      default:
        props.navigation.navigate("InfoUser")
        break
    }
  };
  const Logout = () => {
    asyncStorage.removeItem("user").then((res: any) => {
      props.navigation.navigate("Login")
    })
  }
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="90%">
        <AccountList
          navigation={props.navigation}
          onChangeScreen={changeScreen }
          handleLogout={Logout}
        />
      </Box>
    </NativeBaseProvider>
  );
};
export default AccountScreen;
