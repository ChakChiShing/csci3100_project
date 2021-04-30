import React from "react";
import { Icon } from "react-native-elements";

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
