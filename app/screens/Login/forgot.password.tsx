import React, { useState } from "react";
import { Button, FormControl, HStack, Input, Link, Text, VStack } from "native-base";

interface ForgotPasswordFormData {
  username: string;
  password: string;
}

const ForgotPasswordForm = (props: {
  onSubmit: Function;
  onChangeScreen: Function;
}) => {
  const [forgotPasswordFormData, setForgotPasswordFormData] =
    useState<ForgotPasswordFormData>({
      username: '',
      password: '',
    });
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    return true;
  };

  return (
    <VStack space={3} mt="5">
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}>
          Username
        </FormControl.Label>
        <Input
          onChangeText={(value: string) =>
            setForgotPasswordFormData({
              ...forgotPasswordFormData,
              username: value,
            })
          }
        />
        {errors.username && (
          <FormControl.HelperText _text={{fontSize: 'xs'}}>
            {errors.username}
          </FormControl.HelperText>
        )}
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}>
          Password
        </FormControl.Label>
        <Input
          type="password"
          onChangeText={(value: string) =>
            setForgotPasswordFormData({
              ...forgotPasswordFormData,
              password: value,
            })
          }
        />
        {errors.password && (
          <FormControl.HelperText _text={{fontSize: 'xs'}}>
            {errors.password}
          </FormControl.HelperText>
        )}
        <Link
          _text={{fontSize: 'xs', fontWeight: '500', color: 'indigo.500'}}
          alignSelf="flex-end"
          mt="1">
          Forget Password?
        </Link>
      </FormControl>
      <Button
        onPress={() => props.onSubmit(forgotPasswordFormData)}
        mt="2"
        colorScheme="indigo"
        _text={{color: 'white'}}>
        Sign in
      </Button>
      <HStack mt="6" justifyContent="center">
        <Text fontSize="sm" color="muted.700" fontWeight={400}>
          I'm a new user.{' '}
        </Text>
        <Link
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          href="#"
          onPress={() => props.onChangeScreen('register')}>
          Sign Up
        </Link>
      </HStack>
    </VStack>
  );
};

export default ForgotPasswordForm;
