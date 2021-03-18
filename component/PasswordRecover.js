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
} from "react-native";

class PasswordRecover extends React.Component {
  constructor() {
    this.state = {
      wrong: false,
    };
  }
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          {/*-----------Done: Insert Notice message and picture here-----------*/}
          <View style={styles.header}>
            <Image source={require("../assets/passwordRec.png")}></Image>
            <Text style={styles.heading}>Ops! We got a Dopey here.</Text>
            <Text style={styles.subHeading}>
              No worries. Recover your password by entering your Email.
            </Text>
          </View>

          {/*----------Done: Textinput for email entry and confirm-----------*/}
          <View style={styles.main}>
            <Text style={styles.mainText}>Email:</Text>
            <TextInput style={styles.inputBox} placeholder="ABC123@mail.com" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.mainText}>Enter</Text>
            </TouchableOpacity>
          </View>
          {/*----------Done: Warn message pop out when error found-----------*/}
          {this.state.wrong && (
            <View style={styles.errorMsg}>
              <Text style={styles.errorText}>
                Error message will be shown here.
              </Text>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

{
  /*----------TODO: implement function for linking to database and check valid email-----------*/
}
{
  /*----------this.state.wrong will be set to 'true' if email is not valid and warning message will pop-----------*/
}

{
  /*Style sheet*/
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 2,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    margin: 8,
    textAlign: "center",
    flexWrap: "wrap",
  },
  main: {
    flex: 3,
    backgroundColor: "#fff",
    margin: 10,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    textAlign: "left",
  },
  inputBox: {
    width: 300,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "#777",
    padding: 8,
    backgroundColor: "#fff",
  },
  button: {
    margin: 10,
    width: 80,
    height: 30,
    backgroundColor: "orange",
    borderRadius: 8,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsg: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 2,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    margin: 2,
    textAlign: "center",
  },
});

export default PasswordRecover;
