import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { 
  StyleSheet,
  Text, 
  View, 
  SafeAreaView,
  StatusBar, 
  TouchableOpacity,
  Dimensions
} from 'react-native';

{/*----------TODO: implement function for linking to database and show quick sumamry-----------*/}

class Summary extends React.Component {
    render(){
      return (
        <>  
        <StatusBar />
          <SafeAreaView style={styles.container}>
            {/*This part is about a message will pop out when you first open the app each day*/}
            <View style={styles.header}>
              <Text style={styles.heading}> M.Hero </Text>
              <Text style = {styles.headingSubText}> Random Greating</Text>
            </View>
            {/*This part is about giving a quick sumamry of all kind of bills users entered */}
            <View style={styles.main}> 
              <ScrollView>   
                <View style={styles.buttonSet}>
                  <TouchableOpacity style={styles.buttonSummary}>
                    <Text style={styles.buttonTextSummary}>Summary. Including all kind of billing contents, need to pair up with database, incomplete ATM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>This month. Expense of this month, need to pair up with database, incomplete ATM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Custom category: Travel. Expense of travelling, need to pair up with database, incomplete ATM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Custom category:Food. Expense of buying foods, need to pair up with database, incomplete ATM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Etc.... Expense of custom, need to pair up with database, incomplete ATM. Reason for using touchableOpacity is that whenever user clicks this category, he can view in a page with more details</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>   
            </View>

          </SafeAreaView>
        </>
      )
    }
  }
  
  {/*
    this screen can be cutted into two parts: 1.header for the greating message, 2.main body for showing all quick summaries
    also have some styles value for text, image, button, and button text respectively
  */}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      header:{
        flex: 1,
        backgroundColor: '#248',
        justifyContent: 'center',
        alignItems: 'center'
      },
      main:{
        flex: 5,
        backgroundColor: 'white',
        justifyContent : 'center',
        alignItems: 'center'
      },
      mainText:{
        fontSize: 32,
        backgroundColor: 'white'
      },
      heading:{
        color: '#FFF',
        fontSize : 32,
        fontWeight: 'bold',
        textAlign:'center'  
      },
      headingSubText:{
        color : 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign : 'center'
      },
      button:{
        backgroundColor : '#ED4',
        borderRadius: 8,
        width : (Dimensions.get('window').width - 20),
        height : 100,
        justifyContent : 'center',
        alignItems : 'center',
        margin: (Dimensions.get('window').width - (54*5))/(5*2),
      },
      buttonSummary:{
        backgroundColor : '#ED4',
        borderRadius: 8,
        width : (Dimensions.get('window').width - 20),
        height : 200,
        justifyContent : 'center',
        alignItems : 'center',
        margin: (Dimensions.get('window').width - (54*5))/(5*2),
      },
      buttonText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      buttonTextSummary:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      buttonSet:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      },
      mainPic:{
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').width - 40,
        resizeMode: 'stretch'
      },
    });

    export default Summary;