import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Screen} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FriendScreen from './component/FriendScreen.js';
import HomeScreen from './component/HomeScreen.js';
import SettingScreen from './component/SettingScreen.js';
import AddBilScreen from './component/AddBilScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'md-home': 'ios-home';

          } else if (route.name === 'Setting') {

              iconName = focused ? 'ios-settings': 'ios-settings';

          } else if (route.name === 'Add Bil') {
            
              iconName = focused ? 'ios-add-circle': 'ios-add-circle';

          } else if (route.name === 'Friend') {
            iconName = focused ? 'people': 'people';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions = {{
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen  name="Home" component={HomeScreen}/>
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
