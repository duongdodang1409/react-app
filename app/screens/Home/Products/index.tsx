import { dataProduct } from "../../../Data/Data";
import React from "react";
import { FlatList, View } from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import ProductItem from "./item";


const HomeProducts = (props: {navigation: any; parentWidth: number}) => {
  const showProductDetail = (item: any) => {
    props.navigation.navigate('DetailProduct', {
      itemId: item.id,
      itemImage: item.ProductImage,
      itemProductName: item.ProductName,
      itemPrice: item.Price,
      itemRating: item.rating,
    });
  };

  return (
    <FlatList
      numColumns={2}
      data={dataProduct}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}: any) => (
        <TouchableWithoutFeedback onPress={() => showProductDetail(item)}>
          <View>
            <ProductItem parentWidth={props.parentWidth} data={item} />
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default HomeProducts;
