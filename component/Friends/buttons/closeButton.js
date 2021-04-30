import React from "react";
import { Icon } from "react-native-elements";

// this is a reusable class for a cross button, pressing it for declining the friend request/suggestion
export default class viewButton extends React.Component {
  render() {
    return (
      <Icon
        raised
        name="close-outline"
        type="ionicon"
        color="#f50"
        size={15}
        onPress={() => console.log("declining")}
      />
    );
  }
}
