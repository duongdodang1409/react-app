import Carousel from 'react-native-snap-carousel';
import {dataItemCarouse} from '../../../Data/Data';
import React from 'react';
import {Image} from 'native-base';
import styles from './styles';
import {Dimensions} from 'react-native';

const HomeCarousel = (props: {}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <Carousel
      data={dataItemCarouse}
      layoutCardOffset={1}
      sliderWidth={width}
      itemWidth={width}
      loop={true}
      autoplay={true}
      renderItem={_renderItemBanner}
    />
  );
};

const _renderItemBanner = ({item}: any) => {
  return (
    <Image style={styles.image} source={{uri: item.image}} alt={'imageDt'} />
  );
};

export default HomeCarousel;
