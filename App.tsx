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
// ----------------------------------------------------
// Note:
// By default the Login Id and Password is "usr" , "paw"
// 
import { useEffect } from "react";
import LoginTabs from "./component/Login/LoginScreen.js";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginHome, Reset, LoadingSc, SignUp } from "./component/Login/Screen.js";
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import  AuthaContext from "./component/Login/Context.js";
const AuthStack = createStackNavigator();

//*added til this part*/
// ----------------------------------------------------

const Tab = createBottomTabNavigator();

export default function App() {
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
        // ----------------------------------------------------
        // TODO: Please help
        // This part needs to be modified
        // if (userName == 'usr' && password == 'paw')
        // change to db verification 
        // => if (username && password) both exist in db
        // return true else return false
        // ----------------------------------------------------
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
      
      // ----------------------------------------------------
      // TODO: Please help
      // SignOut should be set in setting page
      // Guide: 
      // 1. import {AuthaContext} from Login/Context.js
      // 2. add next line of code "const { signOut } = React.useContext(AuthaContext);"
      // 3. add function => "const signOutHandle = () => {signOut()}"
      // 4. create new button in setting screen with onPress event set to call signOutHandle()
      // ----------------------------------------------------
      signOut: async() => {
        try {
          await AsyncStorage.removeItem("userToken");
        }catch(e) {
          console.log(e)
        }
        dispatch({type:'LOGOUT'});
      },
      
      // TODO: Please help
      // This function will be called at register, 
      // it returns username and password demanded by the user
      // insert these two value with proper schema/relation into correct table in the DB
      
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
  
  // This userEffect will try to login automatically 
  // with previous saved data after opening the app for 2 seconds
  
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
  
 {
    return (
      
      // Note:
      // This part is new
      // Added AuthaContext for checking loggin
      // if it is logged it shows the screens
      // else it directs to login screen
      
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
          
          // Note: 
          // This part below is the login screen
          
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
