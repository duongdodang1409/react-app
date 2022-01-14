import React, { useEffect, useState } from "react";
import { Box, FormControl, Heading, NativeBaseProvider } from "native-base";
import LoginForm from "./login";
import loginService from "../../services/login";
import RegisterForm from "./register";
import ForgotPasswordForm from "./forgot.password";
import asyncStorage from "../../services/deviceStorage";

const LoginScreen = (props: { navigation: any }) => {

  const [note,setNote]=useState<String>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [loginFail, setLoginFail] = useState<boolean>(true);
  const [screenMode, setScreenMode] = useState<string>("login");
  const [heading, setHeading] = useState<string>("");


  useEffect(() => {

    if (screenMode == "login") {
      // Login screen
      setLoginFail(false);
      setHeading("Sign in to continue!");


    } else if (screenMode == "register") {
      // Register screen
      setLoginFail(false);
      setHeading("Register new account!");
    } else {
      // Forgot password screen
      setHeading("Reset password!");
    }
  }, [screenMode]);

  const login = (data: any) => {

    loginService.login({}).then((res: any) => {
      const checkUser = res.data.find((item: any) => {
        return item.UserName == data.username && item.Password == data.password;
      });
      // console.log("[detailUser]",checkUser)
      if (checkUser) {
        asyncStorage.saveItem("detailUser", JSON.stringify(checkUser))
        asyncStorage.saveItem("user", JSON.stringify(data)).then((res: any) => {
          setNote("Đăng nhập thành công");
          props.navigation.navigate("Home");
        });
      } else {
        setLoginFail(true);
        setNote("Đăng nhập thất bại");
      }
    });
  };


  const register = (data: any) => {

    loginService.register(data).then((res: any) => {
      console.log(res.status)
      if (res.status) {
        setLoginFail(true);
        setNote("Đăng kí thành công");
      } else {
        // Register fail
      }
    });
  };



  const forgotPassword = (data: any) => {
    // Call api login
    loginService
      .login(data)
      .then((res: any) => {
        console.log(res);
      })
      .catch((errors: any) => {
        console.log(errors);
      });
  };
  const changeScreen = (screen: string) => {
    setScreenMode(screen);
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          {heading}
        </Heading>
        {loginFail ?
          <Heading>
            <FormControl>
              <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }}>
                {note}
              </FormControl.HelperText>
            </FormControl>
          </Heading>
          :
          <Heading>
            <FormControl>
              <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }}>
              </FormControl.HelperText>
            </FormControl>
          </Heading>
        }
        {screenMode == "login" ? (
          <LoginForm onSubmit={login} onChangeScreen={changeScreen} />
        ) : screenMode == "register" ? (
          <RegisterForm onSubmit={register} onChangeScreen={changeScreen} />
        ) : (
          <ForgotPasswordForm
            onSubmit={forgotPassword}
            onChangeScreen={changeScreen}
          />
        )}
      </Box>
    </NativeBaseProvider>);

};
export default LoginScreen;
