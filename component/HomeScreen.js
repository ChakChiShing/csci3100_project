import { StatusBar } from 'expo-status-bar';
import React, { useRef, Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//finish by Wong kai lok
class HomeScreen extends React.Component {
  // create state to record fish status
  constructor(props) {
    super(props);
    this.state = {
      showFish: true,  //show fish
      fishcounter: 15   //initail create fish
    }
    this.Addfish = this.Addfish.bind(this);  
    
  }
  // funciton to add more fish
  Addfish = () =>{
    this.setState({showFish: true})
    this.state.counter =this.state.counter //refresh counter
    
  }
  // funciton to add like
  Addlikenum = (likenum) =>{
    this.likenum +=1
  }
    render(){
      const isClick = this.state.showFish;
      var fishHolder = [];  //store fish object
      
      var RandomNumberX;  //random x position
      var RandomNumberY;  //random y position
      var FishNumberZ= Math.floor(Math.random() * 3); //show different type of fish
      var num = 0;
      var likenum =6; //show how many people like
      global.fishcount = this.state.fishcounter;

      if(isClick){

        
        //generate fish accounting to counter
          for( let i = 0; i<global.fishcount; i++){
              RandomNumberX = Math.floor(Math.random() * 400) + 1, 
              RandomNumberY = Math.floor(Math.random() * 500) + 1, 
              FishNumberZ = Math.floor(Math.random() * 5) +1  //generate different fiah
              if(FishNumberZ == 1){
                fishHolder.push(     
                  <Image source={require('../assets/realfish.png')} style={{height:75, width:120, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>
                )
              }
              if(FishNumberZ == 2){
                fishHolder.push(     
                  <Image source={require('../assets/realfish2.png')} style={{height:120, width:150, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>
                )
              }
              if(FishNumberZ == 3){
                fishHolder.push(     
                  <Image source={require('../assets/realfish3.png')} style={{height:50, width:75, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>
                )
              }
              if(FishNumberZ == 4){
                fishHolder.push(     
                  <Image source={require('../assets/realfish4.png')} style={{height:100, width:150, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>
                )
              }
              if(FishNumberZ == 5){
                fishHolder.push(     
                  <Image source={require('../assets/realfish5.png')} style={{height:150, width:200, position:'absolute', left:RandomNumberX, top:RandomNumberY}}/>
                )
              }
            }
      }

      return (
        //render different image, like background image, fish image, ;like number image
        <ImageBackground
            source={require('../assets/background.jpg')} style={styles.backgroundcontainer}> 
        <View style ={{flex:1, justifyContent: 'center',}}>
          
          <View style ={{ backgroundColor:'marineblue', bottom: 340}}>
  
          <Text style = {{fontSize: 20, marginLeft: 80}}> {likenum} 
          </Text>
          <Image source={require('../assets/likeicon.png')} style={{height:75, width:120, position:'absolute', left: 1, top:1}}>
            
          </Image>
  
          {/* {this.Addfishauto(num)} */}
            <TouchableOpacity 
              onPress={this.Addfish}> 
              <Ionicons name ='sync' style= {styles.plus}></Ionicons>
            </TouchableOpacity>
            {fishHolder}  
            
          </View>
      </View>
      </ImageBackground>
      );
    }
  }
  
  //store different style
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
        marginTop: 300,
      },
      like:{
        fontSize:3000,
        position: 'absolute',
        right: 350,
        // bottom:100,
        top: 100,
        marginTop: 1,
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
