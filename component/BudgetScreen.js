import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,useState, TouchableOpacity } from 'react-native';

class BudgetScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "2000",
          currency: 'HKD$',
          click: false,
        };
        this.onPressButton = this.onPressButton.bind(this);  
      }

      onPressButton() {
        this.setState({click: true})
        console.log(this.state.value);
      }
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent:'center', }}>
          <View style = {styles.header}>
          <Text style ={{fontSize:20, marginBottom:5}}>{this.state.currency}{this.state.value}</Text>
            <TextInput 
            
            keyboardType='numeric'
            placeholder = "change the value here"
            onChangeText={(val) => this.setState({ value: val})}
            ></TextInput>
          </View>


          <TouchableOpacity style={styles.appButtonContainer} onPress={this.onPressButton}>
      <Text style={styles.appButtonText}>Save </Text>
    </TouchableOpacity>
          
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
        height: 80,
        padding: 8,
        marginBottom:80
        
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      
      
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    appButtonText: {
      fontSize: 28,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  export default BudgetScreen;