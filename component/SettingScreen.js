import React, {  useState, Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from "./BudgetScreen.js";
import CurrencyScreen from "./CurrencyScreen.js";
import axios from 'axios';




function Set( { navigation } ) {
  const [country, setCount] = useState(global.target)
  return (
    
    <View style={{ flex: 1, justifyContent: 'column', alignContent:'center',}}>
    
      
      <TouchableOpacity onPress={() => navigation.navigate('Budget')} 
      style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Budget </Text>   
        <Text style ={styles.appButtonText}> $2000</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Currency')} 
      style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Currency </Text>
      </TouchableOpacity>

      
      </View>
  );
}

class SettingScreen extends React.Component {
  state = {
    post: []
  };

  componentDidMount = () => {
    this.getdata();
  }
  getdata = () => {
    axios.get('')
    .then(() => {
      const data = response.data;
      this.setState({ post: data});
      console.log("Data has been received.");
    })
    .catch(() => {
      alert("error in receiving data in setting page");
    })
  }

  displaydata = (post) => {

    if (!post.length){
      return null;
    }

    post.map( () => (
      
    ))
  }
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



      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10
      },
      appButtonText: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

     
    });
  
    export default SettingScreen;