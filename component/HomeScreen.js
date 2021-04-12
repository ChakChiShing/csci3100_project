import { StatusBar } from 'expo-status-bar';
import React, { useRef, Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFish: false,//initially set to false
      counter: 0
    }
    this.Addfish = this.Addfish.bind(this);  
    
  }

  Addfish = () =>{
    this.setState({showFish: true})
    this.state.counter =this.state.counter+1
  }
    render(){
      const isClick = this.state.showFish;
      var fuckingFish = [];
      var RandomNumberX;
      var RandomNumberY; 

      if(isClick){
        for( let i=0; i<this.state.counter; i++){
          RandomNumberX = Math.floor(Math.random() * 400) + 1, 
          RandomNumberY = Math.floor(Math.random() * 500) + 1, 
          fuckingFish.push(     
            <Image source={require('../assets/realfish.png')} style={{height:100, width:150, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>

          )
        }
      }

      return (
        <ImageBackground
            source={require('../assets/background.jpg')} style={styles.backgroundcontainer}>
        <View style ={{flex:1, justifyContent: 'center',}}>
          
          <View style ={{ backgroundColor:'white', bottom: 340}}>
            <TouchableOpacity 
              onPress={this.Addfish}> 
              <Ionicons name ='add-circle' style= {styles.plus}></Ionicons>
            </TouchableOpacity>
            {fuckingFish}
          </View>
      </View>
      </ImageBackground>
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

      backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
      },

      pic: {
        width: 150,
        height:100,
      },
      plus:{
        fontSize:60,
        position: 'absolute',
        right: 20,
        //bottom:0,
        top: 350,
        marginTop: 310,
      },
      fish: {
        position: 'absolute',
        right: 20,
        
        marginTop: 310,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 15
      },

      btnImage:
      {
          resizeMode: 'contain',
          width: '100%',
          tintColor: 'white'
      }
    });
  
    export default HomeScreen;


