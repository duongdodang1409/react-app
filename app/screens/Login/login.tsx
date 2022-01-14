import React, { useEffect, useState } from "react";
import { Button, FormControl, HStack, Input, Link, Text, VStack } from "native-base";

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm = (props: { onSubmit: Function; onChangeScreen: Function }) => {

  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState<any>({});
  const validate = () => {
    if (loginFormData.password === "") {
      setErrors({
        ...errors,
        password: "Please enter your password"
      });
      if (loginFormData.username === "") {
        {
          setErrors({
            ...errors,
            username: "Please enter your username"
          });
          return true;
        }
      }
    } else {
      return false;
    }
  };
  useEffect(() => {
    setErrors(false);
  });
  const summit = (loginFormData: any) => {
    console.log(loginFormData);
    if (validate() === false) {
      props.onSubmit(loginFormData);
    }
  }
  return (
    <VStack space={3} mt="5">
      <FormControl>
        <FormControl.Label
          _text={{
            color: "coolGray.800",
            fontSize: "xs",
            fontWeight: 500
          }}>
          Username or Email
        </FormControl.Label>
        <Input
          onChangeText={(value: string) =>
            setLoginFormData({ ...loginFormData, username: value })
          }
        />
        {errors.username && (
          <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }} color={"red.700"}>
            {errors.username}
          </FormControl.HelperText>
        )}
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            color: "coolGray.800",
            fontSize: "xs",
            fontWeight: 500
          }}>
          Password
        </FormControl.Label>
        <Input
          type="password"
          onChangeText={(value: string) =>
            setLoginFormData({ ...loginFormData, password: value })
          }
        />
        {errors.password && (
          <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }}>
            {errors.password}
          </FormControl.HelperText>
        )}
        <Link
          onPress={()=> props.onChangeScreen("forgot")}
          _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
          alignSelf="flex-end"
          mt="1">
          Forget Password?
        </Link>
      </FormControl>
      <Button
        onPress={() => summit(loginFormData)}
        mt="2"
        colorScheme="indigo"
        _text={{ color: 'white' }}>
        Sign in
      </Button>
      <HStack mt="6" justifyContent="center">
        <Text fontSize="sm" color="muted.700" fontWeight={400}>
          I'm a new user.{' '}
        </Text>
        <Text onPress={() => props.onChangeScreen("register")} bold underline>
          Sign Up
        </Text>
      </HStack>
    </VStack>
  );
};
export default LoginForm;
