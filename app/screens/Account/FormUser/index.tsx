import { Button, FormControl, Input, Radio, View } from "native-base";
import React, { useEffect, useState } from "react";
  interface detailUserInterFace {
  phone: string,
  gmail: string,
  fullName: string,
  address: string,
  gender: any,
}
const FormAccount = (props: {defaultValue: any, onSubmit: Function }) => {
  const [updateData, setUpdateFormData] = useState<detailUserInterFace>({
    fullName: props.defaultValue.fullName,
    gender: props.defaultValue.gender,
    gmail: props.defaultValue.gmail,
    address: props.defaultValue.address,
    phone:props.defaultValue.phone
  });
  const summit = (data:any) => {
    data.fullName = updateData.fullName
    data.gmail = updateData.gmail
    data.address = updateData.address
    data.gender = updateData.gender
    data.phone = updateData.phone
    props.onSubmit(data)
  }
  return (
    <>
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
          defaultValue={props.defaultValue.fullName}
          onChangeText={(value: string) => {
            setUpdateFormData({ ...updateData, fullName: value })}}
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
          defaultValue={props.defaultValue.gmail}
          onChangeText={(value: string) =>{
            setUpdateFormData({ ...updateData, gmail: value })}}
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
          defaultValue={props.defaultValue.address}
          onChangeText={(value: string) =>{
            setUpdateFormData({ ...updateData, address: value })}}
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
          defaultValue={props.defaultValue.phone}
          onChangeText={(value: string) =>{
            setUpdateFormData({ ...updateData, phone: value })}}
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
          onChange={(value) => {
            setUpdateFormData({
              ...updateData, gender: value
            });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Radio value="male" my={0.5}>
              Nam
            </Radio>
            <Radio value="female" my={0.5} ml={3}>
              Nữ
            </Radio>
            <Radio value="three" my={0.5} ml={3}>
              Khác
            </Radio>
          </View>
        </Radio.Group>
      </FormControl>
      <Button
        onPress={() => {summit(props.defaultValue)}}
        mt="2"
        borderBottomRadius={"15"}
        borderTopRadius={"15"}
        _text={{ color: "white" }}>
        Cập nhật thông tin
      </Button>
    </>
  );
};
export default FormAccount;
