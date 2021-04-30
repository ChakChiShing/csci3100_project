import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Icon, ListItem, SearchBar } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import closeButton from "./buttons/closeButton";
import checkmarkButton from "./buttons/checkmarkButton";

export default class Suggestionlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 4,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <Avatar source={{ uri: item.picture.thumbnail }} />
              <ListItem.Content>
                <ListItem.Title>{`${item.name.first} ${item.name.last}`}</ListItem.Title>
              </ListItem.Content>
              <ListItem.ButtonGroup
                buttons={[
                  { element: checkmarkButton },
                  { element: closeButton },
                ]}
                containerStyle={({ height: 50 }, { borderWidth: 0 })}
                innerBorderStyle={{ width: 0 }}
              ></ListItem.ButtonGroup>
            </ListItem>
          )}
          keyExtractor={(item) => item.login.username}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
