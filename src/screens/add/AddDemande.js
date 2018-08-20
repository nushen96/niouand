import React from "react";
import { View, Text } from "react-native";
import style from "../../config/styles";

export default class AddDemande extends React.Component {
  static navigationOption = {
    title: "Ajouter une demande"
  };
  render() {
    return (
      <View style={style.container}>
        <Text>Add Demande</Text>
      </View>
    );
  }
}
