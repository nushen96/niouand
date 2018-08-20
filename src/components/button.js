import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { RaisedTextButton } from "react-native-material-buttons";
import style from "../config/styles";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RaisedTextButton
        title={this.props.title}
        titleColor="#fff"
        color={style.color}
        titleStyle={styles.buttonStyle}
        onPress={this.props.onPress}
      />
    );
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    //	fontFamily: 'DancingScriptOT'
  }
});
