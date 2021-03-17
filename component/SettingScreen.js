import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from "./BudgetScreen.js";
import CurrencyScreen from "./CurrencyScreen.js";
import CategoryScreen from "./CategoryScreen.js";



function Set( { navigation } ) {
  return (
    
    <View style={{ flex: 1, justifyContent: 'column', alignContent:'center',}}>
      
      <View style = {styles.box}>
        <Text style={styles.words}>Budget</Text>

        <View>
          <Button
            
            title="HKD$2000"
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

      <View style = {styles.box}>
        <Text style={styles.words}>Category</Text>
        <View>
        <Button
          title="damn"
          onPress={() => navigation.navigate('Category')}
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
        <Stack.Screen name="Category" component={CategoryScreen} />
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