import firebase from "react-native-firebase";
import { Alert } from "react-native";
import asyncStorage from "../../services/deviceStorage";


const getToken = async () => {
  let fcmToken = await asyncStorage.getItem("fcmToken");
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    console.log("token = ", fcmToken);
    if (fcmToken) {
      // user has a device token
      await asyncStorage.saveItem("fcmToken", fcmToken);
    }
  }
};

const requestPermission = async () => {
  try {
    await firebase.messaging().requestPermission();
    // User has authorised
    getToken;
  } catch (error) {
    // User has rejected permissions
    console.log("quyền bị từ chối");
  }
};


export const checkPermission = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    getToken;
  } else {
    requestPermission;
  }
};

export const createNotificationListeners = async () => {
  const channel = new firebase.notifications.Android.Channel("test-channel", "Test Channel", firebase.notifications.Android.Importance.High,)
    .setDescription("My apps test channel")
 await firebase.notifications().android.createChannel(channel);

  firebase.notifications().onNotification((notifications) => {
    const { title, body } = notifications;
    Alert.alert(title,body)
  });
};
