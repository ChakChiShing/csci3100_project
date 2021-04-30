import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicon from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FriendList from "./FriendListScreen";
import Suggestions from "./SuggestionScreen";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <SafeAreaProvider mode="margin" style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="FriendList"
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          //tabStyle: { width: 100 },
          showIcon: true,
          showLabel: false,
          style: { paddingTop: 40, backgroundColor: "powderblue" },
          showIcon: true,
        }}
      >
        <Tab.Screen
          name="Friend List"
          component={FriendList}
          options={{
            tabBarLabel: "Your Friends",
            tabBarIcon: ({ tintColor }) => (
              <Ionicon name="people" size={25}></Ionicon>
            ),
          }}
        />

        <Tab.Screen
          name="Suggestions"
          component={Suggestions}
          options={{
            tabBarLabel: "Friend suggestions",
            tabBarIcon: ({ tintColor }) => (
              <Ionicon name="person-add" size={25}></Ionicon>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
