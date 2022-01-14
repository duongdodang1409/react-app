import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  Radio, Row,
  Text, View,
  VStack
} from "native-base";
import styles from "./styles";
import asyncStorage from "../../services/deviceStorage";
import updateUserService from "../../services/Update";
import item from "../Home/Products/item";

interface detailUserInterFace {
  UserName : string,
  Password : string,
  avatar : string,
  phone : string,
  id: string,
  cart : any,
  gmail : string,
  FullName:string,
  Address :string,
  gender :any,
}

const InfoUser = (props: { onChangeScreen: Function,navigation:any }) => {

  const [updateData, setUpdateFormData] = useState<detailUserInterFace>({
    UserName: "",
    FullName: "",
    Password: "",
    avatar: "",
    cart: undefined,
    gender: undefined,
    gmail: "",
    id: "",
    phone: "",
    Address: ""
  });
  useEffect(
    () => {
      const unsubscribe = props.navigation.addListener("focus", () => {
        asyncStorage.getItem("detailUser").then((res: any) => {
          console.log("[detailUser]", JSON.parse(res));
          setUpdateFormData(JSON.parse(res));
        });

        return unsubscribe;
      }, [props.navigation]);
    }
  );
  const UpdateUserName = () => {
      console.log(updateData);
       updateUserService.PutUser (updateData,updateData.id).then((res: any) => {
        console.log(res.status);
        if (res.status == 201) {
          console.log("Cập nhật thành công");
        } else {
          console.log("Cập nhật ko thành công");
        }
      });
    };
  const UpdateUser = () => {
    return (
      <Box h="40" style={{ position: "absolute" }}>
        <Box
          safeArea
          flex={1}
          p="2"
          py="8"
          w="90%"
          mx="1">
          <Center mt="1">
            <Box
              bg="gray.100"
              p="4"
              mt="10"
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
              <HStack space={6}>
                <Avatar
                  size="67px"
                  source={{
                     uri: "https://aphoto.vn/wp-content/uploads/2019/07/top-anh-chan-dung-aphoto-tuan-2-thang-70.jpg"
                  }}
                />
                <VStack style={{ left: 0, justifyContent: "flex-start" }}>
                  <Text
                    _dark={{
                      color: "warmGray.800"
                    }}
                    color="coolGray.800"
                    bold
                  >{updateData?.FullName}
                  </Text>
                  <Text
                    underline
                    fontSize={"lg"}
                    color="green.500"
                    _dark={{
                      color: "green.600"
                    }}
                  >
                    {updateData?.gmail}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Center>
          <VStack
            space={3}
            mt="19">
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.500",
                  fontSize: "xs",
                  fontWeight: 500
                }}>
                Họ và tên
              </FormControl.Label>
              <Input
                variant="underlined"
                defaultValue= {updateData.FullName}
                onChangeText= {(value: string) =>
                  setUpdateFormData({ ...updateData, FullName: value })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.500",
                  fontSize: "xs",
                  fontWeight: 500
                }}>
                Email
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="@gmail.com"
                defaultValue= {updateData.gmail}
                onChangeText= {(value: string) =>
                  setUpdateFormData({ ...updateData, gmail: value })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.500",
                  fontSize: "xs",
                  fontWeight: 500
                }}>
                Địa chỉ
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="address  "
                defaultValue= {updateData.Address}
                onChangeText= {(value: string) =>
                  setUpdateFormData({ ...updateData, Address: value })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.500",
                  fontSize: "xs",
                  fontWeight: 500
                }}>
                Số điện thoại
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Phone Number "
                defaultValue= {updateData.phone}
                onChangeText= {(value: string) =>
                  setUpdateFormData({ ...updateData, phone: value })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.500",
                  fontSize: "xs",
                  fontWeight: 500
                }}>
                Giới tính
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                //defaultValue={updateData?.gender}
                onChange={(value) => {
                  setUpdateFormData({
                    ...updateData,gender:value
                  })
                }}
              >
                <View  style={{flexDirection :"row" }}>
                <Radio value="male" my={0.5}  >
                  Nam
                </Radio>
                <Radio value="female" my={0.5} ml={3} >
                  Nữ
                </Radio>
                <Radio value="three" my={0.5} ml={3}>
                  Khác
                </Radio>
                </View>
              </Radio.Group>
            </FormControl>
            <Button
              onPress={() => UpdateUserName }
              mt="2"
              borderBottomRadius={"15"}
              borderTopRadius={"15"}
              _text={{ color: "white" }}>
              Cập nhật thông tin
            </Button>
          </VStack>
        </Box>
      </Box>
    );

  };
  return (
    <NativeBaseProvider>
      <UpdateUser />
    </NativeBaseProvider>
  );
};
export default InfoUser;
