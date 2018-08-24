import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ToolbarAndroid,
  AsyncStorage,
  ListView,
  ActivityIndicator
} from "react-native";
import style from "../../../config/styles";
import { FloatingAction } from "react-native-floating-action";
import { Header } from "react-native-elements";
import Menu from "../../../components/Menu";
import Row from "../../../components/Row";
import SideMenu from "react-native-side-menu";
import { Toolbar } from "../../../components/Toolbar";

const staticInfos = [
  {
    date: "2018-08-24T10:16:00.000Z",
    from: { description: "Dakar, Senegal" },
    to: { description: "Thies, Senegal" },
    user: {
      nom: "Fatou Sy",
      avatar:
        "https://pickaface.net/gallery/avatar/20120202_105052_3255_beautifull.png",
      phone: "779450213",
      email: "fatousy@domain.com",
      cni: "2593199600673"
    }
  },
  {
    date: "2018-08-24T10:16:00.000Z",
    from: { description: "Pikine, Senegal" },
    to: { description: "Thiaroye, Senegal" },
    user: {
      nom: "Ngor Sène",
      avatar:
        "https://pickaface.net/gallery/avatar/20150205_035022_2405_first_glance.png",
      phone: "779450213",
      email: "sengor@hotmail.com",
      cni: "1687196800123"
    }
  }
];

export default class Demande extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      infos: [],
      isOpen: false,
      selectedItem: "About",
      loading: true,
      areInfosAvailable: false
    };
  }

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

  componentDidMount = async () => {
    try {
      const infos = await AsyncStorage.getItem("infosArray");
      this.setState({ loading: false, areInfosAvailable: true });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false, areInfosAvailable: false });
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
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.state.loading) {
      return (
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
        >
          <View style={style.container}>
            <ActivityIndicator size="large" color={style.color} />
          </View>
        </SideMenu>
      );
    } else {
      if (this.state.areInfosAvailable) {
        return (
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen => this.updateMenuState(isOpen)}
          >
            <View style={style.container}>
              <ListView
                enableEmptySections={true}
                dataSource={ds.cloneWithRows(staticInfos)}
                renderRow={(rowData, j, k) => <Row infos={rowData} index={k} />}
              />
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
      } else {
        return (
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={isOpen => this.updateMenuState(isOpen)}
          >
            <View style={style.container}>
              <Text>Aucune demande disponible</Text>
            </View>
          </SideMenu>
        );
      }
    }
  }
}
