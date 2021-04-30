import React from "react";
import { Icon } from "react-native-elements";

export default class checkmarkButton extends React.Component {
  render() {
    return (
      <Icon
        raised
        name="checkmark-outline"
        type="ionicon"
        color="#f50"
        size={15}
        onPress={() => console.log("viewing")}
      />
    );
  }
}
