import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Icon, ListItem, SearchBar } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import viewButton from "./buttons/viewButton";

export default class Friendlist extends Component {
  constructor(props) {
    super(props);
    // initialize fetching state, an empty data array, error status
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
  // fetching data from backend api using fetchAPI, reference: class component of https://reactnative.dev/docs/network
  makeRemoteRequest = () => {
    const getCurrentUser = 1;
    const url = `https://localhost/3000/friends/` + getCurrentUser; //url testing from backend
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json()) //json parsing
      .then((res) => {
        this.setState({
          //putting response data into array with error logging
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    // an separator component for separating each friend
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
  //an search filtering function by searching name of the friend in the search bar, which it will filter the data in the arrayholer,
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      //filter the data in the arrayholer, which stores all the response data
      const itemData = `${item.account_name}`;
      const textData = text;

      return itemData.indexOf(textData) > -1; //return all the account name which matches textData, which is the text user input.
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    //Setting the search bar as header for this searching screen
    return (
      <SearchBar //search bar with searchFilterFunction as a hot loading alike search bar
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
    //render a activity indicator for loading state is true, i.e. a loading circle, https://reactnative.dev/docs/activityindicator
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
      //render the full friendlist
      <View style={{ flex: 1 }}>
        <FlatList //render friendlist using flatlist, https://reactnative.dev/docs/flatlist
          data={this.state.data}
          renderItem={({ item }) => (
            //configure layout/data to display inside each item by ListItem, https://reactnativeelements.com/docs/listitem/
            // display account name,  for each item, and button to view aquarium of each friend
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{`${item.account_name}`}</ListItem.Title>
              </ListItem.Content>
              <ListItem.ButtonGroup
                buttons={[{ element: viewButton }]}
                containerStyle={({ height: 50 }, { borderWidth: 0 })}
              ></ListItem.ButtonGroup>
            </ListItem>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader} //render search bar as the header
        />
      </View>
    );
  }
}
