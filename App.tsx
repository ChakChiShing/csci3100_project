import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FriendScreen from './component/Friends/FriendScreen.js';
import HomeScreen from './component/HomeScreen.js';
import SettingScreen from './component/SettingScreen.js';
import AddBilScreen from './component/AddBilScreen.js';

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://csci3100:csci3100mhero@cluster0.pkkys.mongodb.net/Mhero?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect(uri, options);
mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

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


