import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./app/screens/Home";
import CartScreen from "./app/screens/Cart";
import AccountScreen from "./app/screens/Account";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginScreen from "./app/screens/Login";
import ChangePassword from "./app/screens/Account/ChangePassword";
import InfoUser from "./app/screens/Account/InforUser";
import PrivacyPolicy from "./app/screens/Account/PrivacyPolicy";
import DetailProductScreen from "./app/screens/DetailProduct/index";
import { checkPermission, createNotificationListeners } from "./app/Components/ComponentsFirebase";
import asyncStorage from "./app/services/deviceStorage";

const AppStack = createNativeStackNavigator();
const HomeStack = createBottomTabNavigator();
export default function App(props: { navigation: any }) {
  const [screenMode, setScreen] = useState<string>();

  useEffect(() => {
    checkPermission;
    createNotificationListeners;
    asyncStorage.getItem("user").then((res: any) => {
      if (res) {
        setScreen("Home");
      } else {
        setScreen("Login");
      }
    });
  }, []);

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8"
    },
    headerTintColor: "white",
    headerBackTitle: "375em",
    inactiveTintColor: "black"
  };

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator screenOptions={screenOptionStyle}>
        <HomeStack.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            title:"Trang chủ",
            headerShown: false,
            headerRight: () => {
              return <Icon name="user-circle-o" size={40} color={"gray"} />;
            },
            tabBarIcon: () => {
              return <Icon
                name="home"
                size={30}
                style={{ color: useIsFocused() ? "#3B07CA" : "gray" }} />;
            }
          }}
        />
        <HomeStack.Screen
          name="CartTab"
          component={CartScreen}

          options={{
            title:"Giỏ hàng",
            tabBarIcon: () => {
              return (
                <Icon
                  name="shopping-cart"
                  size={30}
                  style={{ color: useIsFocused() ? "#3B07CA" : "gray" }}
                />
              );
            }
          }}
        />
        <HomeStack.Screen
          name="AccountTab"
          component={AccountScreen}
          options={{
            title: "Trang cá nhân",
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Icon
                  name="user"
                  size={30}
                  style={{ color: useIsFocused() ? "#3B07CA" : "gray" }}
                />
              );
            }
          }}
        />
      </HomeStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name= "Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Home"
          component={HomeStackScreen}
          options={() => ({
              headerShown: false,
              headerLeft: () => <></>
            }
          )}
        />

        {/*AccountList*/}
        <AppStack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={() => ({}
          )}
        />
        <AppStack.Screen
          name="InfoUser"
          component={InfoUser}
          options={() => ({
            }
          )}
        />
        <AppStack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={() => ({
            }
          )}
        />
        <AppStack.Screen
          name="DetailProduct"
          component={DetailProductScreen}
          options={() => ({
            }
          )}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
