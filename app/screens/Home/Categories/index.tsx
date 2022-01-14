import React from 'react';
import {FlatList, Image, Text} from 'native-base';
import styles from './style';
import {TouchableWithoutFeedback, View} from 'react-native';

const images = [
  {src: require('../../../assets/images/all.png'), context: 'Tất cả', key: '1'},
  {
    src: require('../../../assets/smartphone.png'),
    context: 'Điện thoại',
    key: '2',
  },
  {
    src: require('../../../assets/headphones.png'),
    context: 'Tai nghe',
    key: '3',
  },
  {src: require('../../../assets/monitor.png'), context: 'Màn hình', key: '4'},
  {src: require('../../../assets/printer.png'), context: 'Máy in', key: '5'},
  {src: require('../../../assets/images/ghe.jpg'), context: 'Ghế ', key: '6'},
];

const HomeCategories = (props: {}) => {
  return (
    <FlatList
      data={images}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item}) => (
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={{padding: 15}}>
            <Image source={item.src} size={25} alt={'imageDt'} />
            <Text
              style={{
                fontSize: 13,
                alignSelf: 'center',
              }}>
              {item.context}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default HomeCategories;
