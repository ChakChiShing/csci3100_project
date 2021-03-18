import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

class FriendScreen extends React.Component {
  render(){
    const Tab = createMaterialTopTabNavigator();
    return (
      
      <SafeAreaProvider mode="margin" style={{ flex: 1}}>
        <Tab.Navigator  initialRouteName='FriendList'
      tabBarOptions={{
        
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 200 },
        style: { paddingTop: 40,backgroundColor: 'powderblue' },
        showIcon: true,
      }}>
      <Tab.Screen name="FriendList" component={FriendList}
       options={
          { tabBarLabel: 'Your Friends' ,
           tabBarIcon: ({tintColor})=>(  
            <Icon name="people-outline"></Icon>
           ),
          }} />
      <Tab.Screen name="Suggestions" component={Suggestions} 
      options={
        { tabBarLabel: 'Your Friends' ,
         tabBarIcon: ({tintColor})=>(  
          <Icon name="people-outline"></Icon>
         ),
        }} />
      </Tab.Navigator>
      </SafeAreaProvider>
      

    );
  }
}


function Suggestions () {

    return (
      <View style={{ flex: 1,justifyContent:'center', alignItems:'center'}}>
      <Text>suggestion list</Text>
      </View>
    );
  
}
function FriendList() {

    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
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