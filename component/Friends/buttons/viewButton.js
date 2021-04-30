import React from "react";
import { Icon } from "react-native-elements";

// this is a reusable class for a checkmark button, pressing it for viewing aquarium
export default class viewButton extends React.Component {
  render() {
    return (
      <Icon
        raised
        name="eye-outline"
        type="ionicon"
        color="#f50"
        size={15}
        onPress={() => console.log("viewing")}
      />
    );
  }
}
