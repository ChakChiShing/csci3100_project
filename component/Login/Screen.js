// this file holds all screen for login components

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AuthaContext from "./Context.js";

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

// loading screen
export const LoadingSc = ({ navigation }) => (
  <>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  </>
);

// sign up screen
// consisits of three part
// top: title
// middle: input text box for acc and pw
// buttons
export const SignUp = ({ navigation }) => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const { signUp } = React.useContext(AuthaContext);
  const signUpHandle = (un, pw) => {
    signUp(un, pw);
  };
  return (
    <>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold", margin: 4 }}>
          New to M.Hero?
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "bold", margin: 4 }}>
          Nice to meet you here, sweeties {"\n"}Join us at once!
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 4 }}>
          LoginID:
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="e.g. ChanDaiMing123"
          onChangeText={(val) => setUsername(val)}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 4 }}>
          Password:
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="your password"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        {/*<Text>ID:{username} PW: {password}</Text>*/}
        <View style={{ alignItems: "flex-start", margin: 8 }}>
          <Button
            title="Sign Up"
            style={styles.buttonLogin}
            onPress={() => {
              signUpHandle(username, password);
            }}
          />
        </View>
      </View>
    </>
  );
};

{
  /*You can change onPress event from alert to check login details*/
}
// this part is for login
// top: title
// middle: input text box for acc and pw
// down: buttons
export const LoginHome = ({ navigation }) => {
  const { signIn } = React.useContext(AuthaContext);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const signInHandle = (un, pw) => {
    signIn(un, pw);
  };
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>M.Hero</Text>
      </View>

      <View style={styles.body}>
        <Text>LoginID:</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="e.g. ChanTaiMing123"
          onChangeText={(val) => setUsername(val)}
        />

        <Text>Password:</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="your password"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />

        <Button
          title="Sign In"
          style={styles.buttonLogin}
          onPress={() => {
            signInHandle(username, password);
          }}
        />

        <View style={styles.spacing}></View>

        <Button
          title="Register"
          onPress={() => navigation.push("SignUp")}
          style={styles.buttonForgot}
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
};

{
  /*You can change onPress event to something like authorize account...*/
}
// this part is the password recovery
export const Reset = ({ navigation }) => {
  const { resetPW } = React.useContext(AuthaContext);
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const resetHandle = (un, em) => {
    resetPW(un, em);
  };
  return (
    <>
      <View style={styles.forgotHead}>
        <Text style={styles.forgotHeaderText}>
          Clumsy Clumsy but no worries!
        </Text>
        <Text style={styles.forgotHeaderText}>
          Recover your account within minutes
        </Text>
      </View>
      <View style={styles.fogotBody}>
        <Text>Enter your Login ID:</Text>
        <TextInput 
        style={styles.inputBox} 
        placeholder="e.g. ChanDaiMing123"
        onChangeText={(val) => setUsername(val)} />
        <Text>Register email:</Text>
        <TextInput 
        style={styles.inputBox} 
        placeholder="e.g. CDM123@mail.com" 
        onChangeText={(val) => setEmail(val)} 
        />
        <Button
          title="Enter"
          onPress={() =>
            resetHandle(username,email)
          }
        />
      </View>
    </>
  );
};
