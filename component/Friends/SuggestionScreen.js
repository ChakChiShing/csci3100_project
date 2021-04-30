import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Suggestionlist from "./SuggestionSearch";

export default class Suggestions extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Suggestionlist />
      </View>
    );
  }
}
