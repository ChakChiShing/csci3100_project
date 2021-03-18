import React, { Component, useState } from "react";
import { Button } from "react-native";
import { Modal } from "react-native";
import { ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }
  toggle = () => {
    this.setState({
      showing: !this.state.showing,
    });
  };
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require("../assets/home_BG.png")}
            style={styles.image}
          >
            <SafeAreaView style={styles.container}>
              {/*-----------Upper section-----------*/}
              <View style={styles.head}>
                <Text style={styles.headerText}>Aquarium</Text>
              </View>

              {/*-----------Bottum section-----------*/}
              <View style={styles.bottum}>
                {/*-----------Comment box section-----------*/}
                {!this.state.showing && (
                    <View
                      style={styles.emptyChatBox}
                    >
                    </View>
                  )}
                  {this.state.showing && (
                    <View
                      style={styles.chatBox}
                    >
                      <Text style={styles.messageText}>
                        Showing comments here!{"\n"}Example{"\n"}Me:
                        124965478914723561423654asda4sd6as{'\n'}
                        can be finished upon having database
                      </Text>
                    </View>
                  )}
                  {/*-----------Likes count section-----------*/}
                  <View style={styles.likeCount}>
                    <View style={styles.likeCount}>
                      <Image
                        source={require("../assets/like.png")}
                        style={styles.thumbs}
                      />
                    </View>
                    <View style={styles.likeCount}>
                      <Image
                        source={require("../assets/dislike.png")}
                        style={styles.thumbs}
                      />
                    </View>
                  </View>
              </View>
              <View style={styles.reserved}>
                <View style={styles.buttonMsg}>
                  <Button
                    title="Message"
                    onPress={() => this.toggle()}
                  ></Button>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    margin: 8,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#f5bd4eCC",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "black",
    borderWidth: 4,
  },
  reserved: {
    flex: 0.3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  head: {
    flex: 2,
  },
  heading: {
    fontSize: 20,
  },
  bottum: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chatBox: {
    flex: 1,
    backgroundColor: "#f5e44e88",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#000",
    margin: 8,
  },
  emptyChatBox:{
    flex: 1,
    margin: 10,
  },
  messageText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexWrap: "wrap",
  },
  normalText: {
    color: "#000",
  },
  likeCount: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbs: {
    flex: 1,
    resizeMode: "stretch",
  },
  buttonMsg: {
    width: 100,
  },
});

export default HomeScreen;
