import { Box, Button, FlatList, FormControl, Image, Modal, Text } from "native-base";
import { TouchableOpacity, View } from "react-native";
import styles from './style';
import React, { useState } from "react";
const DetailModal = (props: {isModalVisible: boolean, stopModal: Function }) => {

  const [defaultRating, setDefaultRating] = useState(3);
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const starImageCorner =
    "https://media.istockphoto.com/vectors/gold-star-shape-isolated-on-white-background-golden-star-icon-gold-vector-id1151984174";
  const starImageFilled =
    "https://e7.pngegg.com/pngimages/136/741/png-clipart-computer-icons-star-a-of-a-star-angle-leaf-thumbnail.png";

  const CustomRating = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                alt={"alt image"}
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return(
    <Modal
      isOpen={props.isModalVisible}
      onClose={() => props.stopModal(false)}
      avoidKeyboard
      justifyContent="center"
      bottom="4"
      size="lg"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header> Đánh giá</Modal.Header>
        <Modal.Body>
          <CustomRating/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            flex="1"
            onPress={() => {
              props.stopModal(false);
            }}
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
export default DetailModal;
