import React from "react";
import { Icon } from "react-native-elements";

// this is a reusable class for a checkmark button, pressing it for confirming friend request
export default class checkmarkButton extends React.Component {
  render() {
    return (
      <Icon
        raised
        name="checkmark-outline"
        type="ionicon"
        color="#f50"
        size={15}
        onPress={() => console.log("confirming")}
      />
    );
  }
}
