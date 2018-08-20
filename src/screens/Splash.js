import React from "react";
import { Image, View } from "react-native";

export default class Splash extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Image
          style={{ height: "100%", width: "85%", resizeMode: "contain" }}
          source={require("../assets/images/logo.jpg")}
        />
      </View>
    );
  }
}
