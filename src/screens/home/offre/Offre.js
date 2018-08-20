import React from "react";
import { View, Text, Image } from "react-native";
import style from "../../../config/styles";
import { FloatingAction } from "react-native-floating-action";

export default class Offre extends React.Component {
  static navigationOptions = {
    title: "Offres",
    tabBarIcon: () => {
      return (
        <Image
          source={require("../../../assets/icons/offer-icon.png")}
          style={style.icon}
        />
      );
    }
  };
  goToScreen = screenName => {
    this.props.navigation.navigate(screenName);
  };
  render() {
    const actions = [
      {
        text: "Faire une offre",
        icon: require("../../../assets/icons/offer-icon.png"),
        name: "AddOffre",
        position: 2,
        color: style.color
      },
      {
        text: "Faire une demande",
        icon: require("../../../assets/icons/demand-icon.png"),
        name: "AddDemande",
        position: 1,
        color: style.color
      }
    ];
    return (
      <View style={style.container}>
        <Text>Offres</Text>
        <FloatingAction
          position="right"
          actions={actions}
          color={style.color}
          onPressItem={name => {
            this.goToScreen(name);
            // alert(`selected button: ${name}`);
          }}
        />
      </View>
    );
  }
}
