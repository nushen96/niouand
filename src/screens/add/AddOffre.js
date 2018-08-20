import React from "react";
import { View, Text } from "react-native";
import style from "../../config/styles";

export default class AddOffre extends React.Component {
  static navigationOption = {
    title: "Ajouter une offre"
  };
  render() {
    return (
      <View style={style.container}>
        <Text>Add Offre</Text>
      </View>
    );
  }
}
