import React, { useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginHome, Reset, SignUp} from "./Screen.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {AuthContext} from '.Context.js';
const AuthStack = createStackNavigator();
//const {signIn} = React.useContext(AuthContext);
export default class LoginTabs extends React.Component {
    render(){
        return(
            <SafeAreaProvider mode="margin" style={{ flex: 1 }}>
                <AuthStack.Navigator
                initialRouteName = 'Login'
                >
				{/*/ here lying 3 screens component
				// 1. login -> for handling user login
				// 2. reset -> for password recovery
				// 3. signup -> for new acc register*/}
                    <AuthStack.Screen name ='Login' component = {LoginHome}/>
                    <AuthStack.Screen name ='Reset' component = {Reset}/>
                    <AuthStack.Screen name ='SignUp' component = {SignUp}/>
                </AuthStack.Navigator>
            </SafeAreaProvider>
        );
    }
}

export const signIn = React.useContext(AuthContext);