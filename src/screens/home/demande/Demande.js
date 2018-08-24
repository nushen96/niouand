import React from "react";
import { View, Text, Image } from "react-native";
import style from "../../../config/styles";
import Menu from "../../../components/Menu";
import SideMenu from "react-native-side-menu";
import { FloatingAction } from "react-native-floating-action";

export default class Demande extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedItem: "About"
    };
  }

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

  static navigationOptions = {
    title: "Demandes",
    tabBarIcon: () => {
      return (
        <Image
          source={require("../../../assets/icons/demand-icon.png")}
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

    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={style.container}>
          <Text>Demandes</Text>
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
