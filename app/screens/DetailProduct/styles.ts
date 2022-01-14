import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
    imageBackground: {
      marginTop: 10,
      width: width - 20,
      height: height / 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    boxBackground: {
      width: width - 20,
      height: 138,
      alignSelf: "center",
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: "#F0F8FF",
      padding: 3
    },
    boxBackgroundRating: {
      width: width,
      height: 138,
      alignSelf: "center"
    },
    title: {
      fontSize: 32
    },
    buttonSize: {
      justifyContent: "center",
      width: 100,
      height: 33,
      borderRadius: 20,
      backgroundColor: "#BEBEBE",
      marginLeft: 10

    },
    viewContext: {
      width: width,
      height: height / 6,
      backgroundColor: "#f6f6f6",
    },
    viewContextRating: {
      width: width,
      height: height / 10,
      flexDirection: "row"
  },
  roundButton1: {
    marginTop: 25,
    marginRight: 10,
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#BEBEBE"
  },
  textButton: {
    alignSelf: "center",
    justifyContent: "center"
  },
  textButtonOrder: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    marginLeft :1
  },
  buttonOrder: {
    marginRight: 10,
    marginLeft: 140,
    width: 130,
    height: 40,
    padding: 5,
    borderRadius: 70,
    backgroundColor: "#367517",
    alignSelf: "flex-end",
    shadowOpacity: 100,
    shadowRadius: 10,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
    buttonRating: {
      marginRight: 20,
      marginLeft: 120,
      width: 130,
      height: 40,
      padding: 5,
      borderRadius: 70,
      backgroundColor: "#FF6600",
      shadowOpacity: 100,
      shadowRadius: 10,
      elevation: 8,
      shadowOffset: {
        width: 0,
        height: 4
      }
    },
    buttonColor: {
      marginRight: 10,
      width: 100,
      height: 33,
      padding: 5,
      borderRadius: 100
    },
    customRatingBarStyle: {
      justifyContent: "center",
      flexDirection: "row",
      marginTop: 30
    },
    starImageStyle: {
      width: 40,
      height: 40,
      resizeMode: "cover"
    },
    textColor: {
      marginTop: 3,
      flexDirection: "row"
    },
    textRating: {
      fontWeight: "bold",
      fontSize: 20,
      marginLeft: height/50
    },
    detailRating: {
      fontSize: 18,
      marginLeft: 5
    },
    viewFooter: {
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    textFooterPrice: {
    alignSelf:"center",
      left:height/20,
      padding:5,
      fontSize: 20,
      fontWeight: "bold"
    }
  }
);

export default styles;
