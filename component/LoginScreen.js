import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import Forgot from "./PasswordRecover.js";
class LoginScreen extends React.Component {
  render() {
    const Tab = createStackNavigator();
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          {/* Done: The background image insert here*/}
          <ImageBackground
            source={require("../assets/adaptive-icon.png")}
            style={styles.BG_image}
          >
            {/*-----------Done: Header section for title and pictures-----------*/}
            <View style={styles.header}>
              <View style={styles.headerTitle}>
                <Image
                  source={require("../assets/login_ICON.png")}
                  style={styles.icon_image}
                />
                <Text style={styles.headerText}>M.Hero</Text>
              </View>
            </View>

            <Tab.Navigator initialRouteName="LoginScreen">
              {/*-----Done: The top bar headings and icons insert here------*/}
              <Tab.Screen name="Login" component={LoginSc} />
            </Tab.Navigator>
          </ImageBackground>
        </SafeAreaView>
      </>
    );
  }
}

{
  /*-----------login screen section-----------*/
}
function LoginSc({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.main}>
        <Text style={styles.mainText}>Username:</Text>
        <TextInput style={styles.inputBox} placeholder="e.g. ChanDaiMing" />
        <Text style={styles.mainText}>Password:</Text>
        <TextInput style={styles.inputBox} secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/*-------TODO: Insert navigation here--------*/}
        {/*------onPress navigation to password recovery screen-------*/}
        <TouchableOpacity>
          <Text style={styles.pureText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: "#b3fff6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#e8c054",
    textShadowColor: "#a7fa7d",
    textShadowRadius: 15,
    textShadowOffset: { width: -1, height: 2 },
    margin: 10,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: 200,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "#777",
    padding: 8,
    backgroundColor: "#fff",
  },
  mainText: {
    fontSize: 20,
    margin: 4,
  },
  BG_image: {
    flex: 1,
  },
  icon_image: {
    width: 50,
    height: 50,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 8,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  pureText: {
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#02689e",
  },
});

export default LoginScreen;
