import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLogin: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonForgot: {
    borderRadius: 5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  header: {
    flex: 1,
    backgroundColor: "#95ede7",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 55,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  foot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    flex: 0.1,
  },
  inputBox: {
    width: 250,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "#777",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  forgotHead: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotHeaderText: {
    fontSize: 22,
    color: "black",
  },
  fogotBody: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotButton: {
    width: 30,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

{/*You can change onPress event from alert to check login details*/}
export const LoginHome = ({ navigation }) => (
  <>
    <View style={styles.header}>
      <Text style={styles.headerText}>M.Hero</Text>
    </View>
    <View style={styles.body}>
      <Text>LoginID:</Text>
      <TextInput style={styles.inputBox} placeholder="e.g. ChanDaiMing123" />
      <Text>Password:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="your password"
        secureTextEntry={true}
      />
      <Button
        title="Sign In"
        style={styles.buttonLogin}
        onPress={() => alert("Sign In")}
      />
      <View style={styles.spacing}></View>
      <Button
        title="Forgot Password?"
        onPress={() => navigation.push("Reset")}
        style={styles.buttonForgot}
      />
    </View>
  </>
);

{/*You can change onPress event to something like authorize account...*/}
export const Reset = ({ navigation }) => (
  <>
    <View style={styles.forgotHead}>
      <Text style={styles.forgotHeaderText}>Clumsy Clumsy but no worries!</Text>
      <Text style={styles.forgotHeaderText}>
        Recover your account within minutes
      </Text>
    </View>
    <View style={styles.fogotBody}>
      <Text>Enter your Login ID:</Text>
      <TextInput style={styles.inputBox} placeholder="e.g. ChanDaiMing123" />
      <Text>Register email:</Text>
      <TextInput style={styles.inputBox} placeholder="e.g. CDM123@mail.com" />
      <Button
        title="Enter"
        onPress={() =>
          alert("Password recovery email has been sent to your mail box")
        }
      />
    </View>
  </>
);
