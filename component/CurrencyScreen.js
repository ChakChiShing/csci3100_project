import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyPicker from "react-native-currency-picker";




class CurrencyScreen extends React.Component {
  render(){

    let currencyPickerRef = undefined;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CurrencyPicker
  currencyPickerRef={(ref) => {currencyPickerRef = ref}}
  enable={true}
  darkMode={false}
  currencyCode={"HKD"}
  showFlag={true}
  showCurrencyName={true}
  showCurrencyCode={true}
  onSelectCurrency={(data) => { console.log("DATA", data) }}
  onOpen={() => {console.log("Open")}}
  onClose={() => {console.log("Close")}}
  showNativeSymbol={true}
  showSymbol={false}
  containerStyle={{
      container: {},
      flagWidth: 25,
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
        flagWidth: 25,
        currencyCodeStyle: {},
        currencyNameStyle: {},
        symbolStyle: {},
        symbolNativeStyle: {}
      }
  }}
  title={"Currency"}
  searchPlaceholder={"Search"}
  showCloseButton={true}
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