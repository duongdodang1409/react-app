import { Button, FormControl, Input, VStack } from "native-base";
import React, { useState } from "react";

interface detailUserInterFace {
  passwordPresentScreen: string,
  passwordConfirm: string,
  passwordNew: string,
}

const FormChangePassword = (props: {navigation:any, defaultValue: any, onSubmit: Function }) => {
  const [errors, setErrors] = useState<any>({});
  const [updatePassword, setPasswordPresent] = useState  <any>({
    passwordPresentScreen: "",
    passwordNew: "",
    passwordConfirm: ""
  });
const summit = (data: any) => {

  console.log("[dataInput]",updatePassword.passwordPresent)
  console.log("[dataPassword]",data.Password)
  if( updatePassword.passwordPresentScreen == data.Password ){
    if(updatePassword.passwordNew==updatePassword.passwordConfirm)
    {
      data.Password = updatePassword.passwordConfirm
      props.onSubmit(data)
    }
    else {
      setErrors({
        ...errors,
        passwordConfirm: "Password does not match"
      });
    }
  } else {
    setErrors({
          ...errors,
      passwordPresentScreen: "Please enter password right"
        });
  }
};
return (
  <>
    <FormControl
      mt={"5"}>
      <FormControl.Label
        _text={{
          color: "coolGray.500",
          fontSize: "xs",
          fontWeight: 500
        }}>
        Mật khẩu hiện tại
      </FormControl.Label>
      <Input
        variant="underlined"
        secureTextEntry={true}
        onChangeText={(value: string) => {
          setPasswordPresent(
            {
              ...updatePassword,
              passwordPresentScreen: value
            });
          }}
        />
        {errors.passwordPresentScreen && (
          <FormControl.HelperText
            _text={{
              fontSize: "xs",
              color: "error.500"
            }}>
            {errors.passwordPresentScreen}
          </FormControl.HelperText>
        )}
      </FormControl>
      <FormControl
        mt={"5"}>
        <FormControl.Label
          _text={{
            color: "coolGray.500",
            fontSize: "xs",
            fontWeight: 500
          }}>
          Mật khẩu mới
        </FormControl.Label>
        <Input
          variant="underlined"
          secureTextEntry={true}
          onChangeText={(value: string) => {
            setPasswordPresent(
              {
                ...
                  updatePassword,
                passwordNew: value
              });
          }}
        />
        {errors.passwordNew && (
          <FormControl.HelperText
            _text={{
              fontSize: "xs",
              color: "error.500"
            }}>
            {errors.passwordNew}
          </FormControl.HelperText>
        )}
        <FormControl mt={"5"}>
          <FormControl.Label
            _text={{
              color: "coolGray.500",
              fontSize: "xs",
              fontWeight: 500
            }}>
            Xác nhận lại mật khẩu
          </FormControl.Label>
          <Input
            variant="underlined"
            secureTextEntry={true}
            onChangeText={(value: string) => {
              setPasswordPresent({ ...updatePassword, passwordConfirm: value });
            }}
          />
          {errors.passwordConfirm && (
            <FormControl.HelperText
              _text={{
                fontSize: "xs",
                color: "error.500"
              }}>
              {errors.passwordConfirm}
            </FormControl.HelperText>
          )}
        </FormControl>
      </FormControl>
    <VStack
      space={1}
      mt="5">
      <Button onPress={() => summit(props.defaultValue)}>
        Cập nhật
      </Button>
    </VStack>
  </>
  );
};
export default FormChangePassword;
