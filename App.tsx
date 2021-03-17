import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Screen} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FriendScreen from './component/FriendScreen.js';
import HomeScreen from './component/HomeScreen.js';
import SettingScreen from './component/SettingScreen.js';
import AddBilScreen from './component/AddBilScreen.js';

const Tab = createBottomTabNavigator();
const value = 2000;
const currency ='HKD$';
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Friend" component={FriendScreen}/>
        <Tab.Screen name="Add Bil" component={AddBilScreen}/>
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
