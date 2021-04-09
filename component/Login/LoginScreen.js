import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginHome, Reset} from "./Screen.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AuthStack = createStackNavigator();

export default class LoginTabs extends React.Component {
    render(){
        return(
            <SafeAreaProvider mode="margin" style={{ flex: 1 }}>
                <AuthStack.Navigator
                initialRouteName = 'Login'
                >
                    <AuthStack.Screen name ='Login' component = {LoginHome}/>
                    <AuthStack.Screen name ='Reset' component = {Reset}/>
                </AuthStack.Navigator>
            </SafeAreaProvider>
        );
    }
}