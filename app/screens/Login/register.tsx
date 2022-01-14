import React, { useState } from "react";
import { Button, FormControl, HStack, Input, Text, VStack } from "native-base";

interface RegisterFormData {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterForm = (props: {
  onSubmit: Function;
  onChangeScreen: Function;
}) => {
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    username: "",
    password: "",
    passwordConfirmation: ""
  });
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    if (registerFormData.password === "") {
      setErrors({
        ...errors,
        password: "Please enter your password"
      });
      if (registerFormData.username === "")
      {
        setErrors({
          ...errors,
          username: "Please enter your username"
        });
        if(registerFormData.passwordConfirmation ==="" ){
          return true
        }
        return false
      }
    } else {
      return false;
    }
    return true;
  };
  const summit = (registerFormData: any) => {
    if (validate() === false) {
      props.onSubmit(registerFormData);
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
            setRegisterFormData({
              ...registerFormData,
              username: value
            })
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
            setRegisterFormData({
              ...registerFormData,
              password: value
            })
          }
        />
        {errors.password && (
          <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }} color={"red.700"}>
            {errors.password}
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
          Password confirmation
        </FormControl.Label>
        <Input
          type="password"
          onChangeText={(value: string) =>
            setRegisterFormData({
              ...registerFormData,
              passwordConfirmation: value
            })
          }
        />
        {errors.password && (
          <FormControl.HelperText _text={{ fontSize: "xs", color: "error.500" }} color={"red.700"}>
            {errors.password}
          </FormControl.HelperText>
        )}
      </FormControl>
      <Button
        onPress={() => summit(registerFormData)}
        mt="2"
        colorScheme="indigo"
        _text={{ color: "white" }}>
        Register
      </Button>
      <HStack mt="6" justifyContent="center">
        <Text onPress={() => props.onChangeScreen("login")} bold underline>
          Back to login
        </Text>
      </HStack>
    </VStack>
  );

};

export default RegisterForm;
