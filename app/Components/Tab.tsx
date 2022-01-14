import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();
export default function TabRender() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Register" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
