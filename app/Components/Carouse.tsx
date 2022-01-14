import React, { Dimensions } from "react-native";
import { Image, View } from "native-base";
import { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import styles from "./style";
import { dataItemCarouse } from "../Data/Data";


const carouselBanner = () => {
  const isCarousel = useRef(null);
  const { width, height } = Dimensions.get("window");
  const SLIDER_WIDTH = Dimensions.get("window").width + 10;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

  const _renderItem = ({ item }: any) => {
    return (
      <Image style={styles.image} source={{ uri: item.image }} />);
  };

  return (
    <View>
      <Carousel data={dataItemCarouse}
                layout={"default"}
                layoutCardOffset={1}
                ref={isCarousel}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={_renderItem}
                windowSize={2}
      />
    </View>
  );
};
export default carouselBanner;
