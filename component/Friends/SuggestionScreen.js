import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Suggestionlist from "./SuggestionSearch";

//render a initial view for rendering friend suggestion screen
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
