import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,useState } from 'react-native';

class BudgetScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "2000",
          currency: 'HKD$'
        };
      }
  render(){

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style = {styles.header}>
          <Text>{this.state.currency}{this.state.value}</Text>
            <TextInput 
            
            keyboardType='numeric'
            placeholder = "change the value here"
            onChangeText={(val) => this.setState({ value: val})}></TextInput>
          </View>
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
    header: {
        alignItems: 'center',
      justifyContent: 'center',
        backgroundColor: '#CCFFFF',
        width : 380,
        height: 60,
        padding: 8,
        
    }
  });

  export default BudgetScreen;