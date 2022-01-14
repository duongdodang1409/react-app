import * as React from "react";
import { Button, Center, FormControl, Input, NativeBaseProvider, VStack } from "native-base";

const ProfileScreen = (props: { navigation: any }) => {

  const [formData, setData] = React.useState({ name: "" });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: "Name is required"
      });
      return false;
    }
    if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: "Name is too short"
      });
      return false;
    }
    return true;
  };
  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };
  const InputProfile = () => {
    return (
      <VStack width="90%" mx="3">
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label _text={{bold: true}}>Name</FormControl.Label>
          <Input
            placeholder="John"
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
          {'name' in errors ?
            <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error</FormControl.ErrorMessage>
            :

            <FormControl.HelperText _text={{fontSize: 'xs'}}>
              Name should contain atleast 3 character.
            </FormControl.HelperText>
          }
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>
      </VStack>
  );
  };
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" />
      <InputProfile />
    </NativeBaseProvider>
  );
};

export default ProfileScreen;
