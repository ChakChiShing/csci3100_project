import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyPicker from "react-native-currency-picker"; //this is online package for currency picker

//finished by CHAK CHI SHING
class CurrencyScreen extends React.Component {
  //here all the setting import from react-native-currency-picker

  constructor(props) {
    super(props);
    this.state = {
      target: "hkd",//initially set to false
    }
  }
  render(){
    let currencyPickerRef = undefined;
    global.target = "HKD";
    var check = 1;


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CurrencyPicker
  currencyPickerRef={(ref) => {currencyPickerRef = ref}}
  enable={true}
  darkMode={false}
  currencyCode={global.target}
  showFlag={true}
  showCurrencyName={true}
  showCurrencyCode={true}
  onSelectCurrency={(data) => {  global.target = data.code, console.log(global.target) }}
  onOpen={() => {console.log("Open")}} 
  onClose={() => { console.log("Close")}}
  showNativeSymbol={false}
  showSymbol={true}
  containerStyle={{
      container: {},
      flagWidth: 35,
      currencyCodeStyle: {},
      currencyNameStyle: {},
      symbolStyle: {},
      symbolNativeStyle: {}
  }}
  modalStyle={{
      container: {},
      searchStyle: {},
      tileStyle: {},
      itemStyle: {
        itemContainer: {},
        flagWidth: 35,
        currencyCodeStyle: {},
        currencyNameStyle: {},
        symbolStyle: {},
        symbolNativeStyle: {}
      }
  }}
  title={"Currency"}
  searchPlaceholder={"Search"}
  showCloseButton={false}
  showModalTitle={true}
/>
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

  export default CurrencyScreen;