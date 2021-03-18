import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  SafeAreaView,
  StatusBar, 
  TouchableOpacity,
  Dimensions,
  Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';






class HomeScreen extends React.Component {

    render(){
      const Tab = createMaterialTopTabNavigator();
      return (
        <View>
          <Text>try</Text>
        </View>
      );
    }
  }
  
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  
    export default HomeScreen;