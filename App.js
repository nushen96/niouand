import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import Home from "./src/screens/Home";
import LoginIndex from "./src/screens/login/index";
import Splash from "./src/screens/Splash";
import { LoginStack } from "./src/config/routes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }

  hideSplash() {
    this.setState({ splash: false });
  }

  componentDidMount = async () => {
    //await AsyncStorage.removeItem("access_token");
    setTimeout(() => {
      this.hideSplash();
    }, 3000);
    try {
      const user = await AsyncStorage.getItem("access_token");
      console.log(user);

      if (user) {
        this.niouand = LoginStack(true);
      } else {
        this.niouand = LoginStack(false);
      }
    } catch (error) {
      console.log("+--------------------------------------------+");
      console.log(
        "----------------------------" + error + "----------------------------"
      );
      console.log("+--------------------------------------------+");
    }
  };
  niouand;

  render() {
    return this.state.splash ? <Splash /> : <this.niouand />;
  }
}
