//
// Toolbar Component
//
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typo } from "./Typography";
import style from "../config/styles";
export class Toolbar extends Component {
  render() {
    const { color, title } = this.props;

    return (
      <View style={[styles.toolbar, { backgroundColor: style.color }]}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.jpg")}
        />
        <Text style={[styles.title, Typo.toolbarTitle]}>{title}</Text>
        <Ionicons
          onPress={() => alert("touched")}
          style={[styles.title, styles.icon]}
          name="md-menu"
          size={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        paddingTop: 28,
        paddingBottom: 10,
        height: 68
      },
      android: {
        height: 55
      }
    })
    // flex: 1,
  },
  title: {
    color: "white",
    alignItems: "center"
  },
  logo: {
    ...Platform.select({
      ios: {
        height: 40,
        width: 60
      },
      android: {
        height: 50,
        width: 60
      }
    }),

    resizeMode: "contain"
  },
  icon: {
    marginRight: "2%"
  }
});
