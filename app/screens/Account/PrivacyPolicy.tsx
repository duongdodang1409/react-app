import React from "react";
import { Button, Image, NativeBaseProvider, Text, VStack, ZStack } from "native-base";
import styles from "./styles";

const PrivacyPolicy = (props: { onChangeScreen: Function }) => {
  const background = require("../../assets/images/backgroundaccount.jpg");
  const Policy = () => {
    return (
      <>
        <Image
          alt="Alternate Text"
          source={background}
          style={styles.imageBackground} />
        <Text
          mt={"2"}
          alignSelf={"center"}
          bold
          fontSize={"2xl"}
        >
          Chính sách bảo mật
        </Text>
        <Text
          mt={"2"}
          bold
          fontSize={"lg"}
        >
          Từ khóa chính
        </Text>
        <Text
          mt={2}
          ml={2}
        >
                  Một tuyên bố giải thích cách thức công ty thu thập, xử lý, lưu trữ, chia sẻ, bảo vệ thông tin cá  nhân của khách hàng và các thông tin nhạy cảm được thu thập thông qua các tương tác của khách hàng với trang web.
          Mỗi trang web tương tác và thu thập dữ liệu về khách hàng của họ bằng cách này hay cách khác, nhưng điều này thậm chí còn được áp dụng nhiều hơn khi nói đến một cửa hàng thương mại điện tử. Các trang web thương mại điện tử thường thu thập dữ liệu cá nhân như tên, địa chỉ email, địa chỉ IP, phiên hoạt động và chi tiết thanh toán.
          Do đó, chính sách quyền riêng tư rất quan trọng vì nó không chỉ được coi là dấu hiệu của sự tín nhiệm và tin cậy mà còn đảm bảo rằng chủ sở hữu trang web được bảo vệ cùng với khách hàng của họ, đồng thời tuân thủ các nghĩa vụ pháp lý của họ
        </Text>
        <VStack
          space={3}
          justifySelf={"end"}>
        </VStack>
      </>
    );
  };
  return (
    <NativeBaseProvider>
      <Policy />
    </NativeBaseProvider>
  );
};
export default PrivacyPolicy;
