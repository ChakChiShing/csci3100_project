import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Friendlist from "./FriendSearch";

//render a initial view for rendering friendlist screen
export default class FriendList extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Friendlist />
      </View>
    );
  }
}
