import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FriendScreen from "./component/Friends/FriendScreen.js";
import HomeScreen from "./component/HomeScreen.js";
import SettingScreen from "./component/SettingScreen.js";
import AddBilScreen from "./component/AddBilScreen.js";

//*new added

import { useEffect } from "react";
import LoginTabs from "./component/Login/LoginScreen.js";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginHome, Reset, LoadingSc, SignUp } from "./component/Login/Screen.js";
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import  AuthaContext from "./component/Login/Context.js";
const AuthStack = createStackNavigator();

//*added til this part*/

const Tab = createBottomTabNavigator();

export default function App() {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState<null | String>(null);
  const initialLogin = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginManager = (prevState, action) => {
    switch(action.type) {
      case 'FIRST':
        return {
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading:false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginManager,initialLogin);
  const authContext = React.useMemo(
    () => ({
      signIn: async(userName, password) => {
        let userToken;
        userToken = null;
        if (userName == 'usr' && password == 'paw') {
          userToken = 'shit';
          try {
            await AsyncStorage.setItem("userToken", userToken)
          }catch(e) {
            console.log(e)
          }
        }
        else {
          alert("Incorrect login ID/password")
        }
        dispatch({type:'LOGIN', id: userName, token: userToken});
        //setUserToken("abcde");
        //setIsLoading(false);
      },
      signOut: async() => {
        try {
          await AsyncStorage.removeItem("userToken");
        }catch(e) {
          console.log(e)
        }
        dispatch({type:'LOGOUT'});
      },
      signUp: (userName, password) => {
        alert("Closed beta period, your sign up will be handled soon.")
        let userToken;
        userToken = null;
        dispatch({type:'REGISTER', id: userName, token: userToken});
      },
      resetPW: () => {
        alert("You case will be handled in quick. Please await for our response.");
      }
    }),
    []
  );
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e)
      {
        console.log(e);
      }
      dispatch({type: 'REGISTER', token:userToken});
    },2000);
  },[]);
  // login screen will be shown if the user didn't login/start of the app.
 {
    return (
      // this part is new
      <AuthaContext.Provider value={authContext}>
        <NavigationContainer>
          { loginState.userToken != null ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "md-home" : "ios-home";
                } else if (route.name === "Setting") {
                  iconName = focused ? "ios-settings" : "ios-settings";
                } else if (route.name === "Add Bil") {
                  iconName = focused ? "ios-add-circle" : "ios-add-circle";
                } else if (route.name === "Friend") {
                  iconName = focused ? "people" : "people";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#e91e63",
              labelStyle: {
                fontSize: 12,
              },
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Friend" component={FriendScreen} />
            <Tab.Screen name="Add Bil" component={AddBilScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            
          </Tab.Navigator>
          ) :
            <AuthStack.Navigator initialRouteName="Login">
              <AuthStack.Screen name="Login" component={LoginHome} />
              <AuthStack.Screen name="Reset" component={Reset} />
              <AuthStack.Screen name ='SignUp' component = {SignUp}/>
            </AuthStack.Navigator>
          }
        </NavigationContainer>
      </AuthaContext.Provider>
    );
  }
}
