import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
} from "native-base";
import CartProducts from "./Product";


const DetailProductScreen = (props: { navigation: any, route: any }) => {
  return (
    <NativeBaseProvider>
      <CartProducts navigation={props.navigation}/>
    </NativeBaseProvider>
  );
};

export default DetailProductScreen;
