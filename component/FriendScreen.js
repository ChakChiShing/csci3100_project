import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

class FriendScreen extends React.Component {
  render(){
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator>
      <Tab.Screen name="Friend List" component={FriendList} />
      <Tab.Screen name="Suggestions" component={Suggestions} />
    </Tab.Navigator>
    );
  }
}


function Suggestions () {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>suggestion list</Text>
      </View>
    );
  
}
function FriendList() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>friend!</Text>
      </View>
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

  export default FriendScreen;