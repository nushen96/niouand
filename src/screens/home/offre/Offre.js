import React from "react";
import { View, Text, Image, StatusBar, ToolbarAndroid } from "react-native";
import style from "../../../config/styles";
import { FloatingAction } from "react-native-floating-action";
import { Header } from "react-native-elements";
import Menu from "../../../components/Menu";
import SideMenu from "react-native-side-menu";
import { Toolbar } from "../../../components/Toolbar";

export default class Offre extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedItem: "About"
    };
  }

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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item
    });

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
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
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
      </SideMenu>
    );
  }
}
