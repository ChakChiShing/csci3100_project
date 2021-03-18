import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from "./BudgetScreen.js";
import CurrencyScreen from "./CurrencyScreen.js";




function Set( { navigation } ) {
  return (
    
    <View style={{ flex: 1, justifyContent: 'column', alignContent:'center',}}>
      
      <View style = {styles.box}>
        <Text style={styles.words}>Budget</Text>

        <View>
          <Button
            
            title="HKD$4000"
            onPress={() => navigation.navigate('Budget')}
          />
        </View>
      </View>
      
      <View style = {styles.box}>
        <Text style={styles.words}>Currency</Text>

        <View>
          <Button
          
          title="HKD$"
          onPress={() => navigation.navigate('Currency')}
          />
        </View>
      </View>

      
      </View>
  );
}

class SettingScreen extends React.Component {
    render(){

      const Stack = createStackNavigator();
      return (
        <Stack.Navigator initialRouteName="Set">
        <Stack.Screen name="Set" component={Set}/>
        <Stack.Screen name="Budget" component={BudgetScreen} />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
        </Stack.Navigator>
      );
    }
  }
  
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center',
      },
      box:{
        width: 380,
        height: 80,
        backgroundColor: '#CCFFFF',
        marginBottom: 10,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent:'center',
      },
      label: {
        marginBottom: 5,
        height: 80,
      },

      words: {
        
        justifyContent: 'center',
        alignContent:'center',
        fontSize: 20,
      },

     
    });
  
    export default SettingScreen;