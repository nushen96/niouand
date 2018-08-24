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
    date: "2018-12-25T16:15:00.000Z",
    from: { description: "Dakar, Senegal" },
    to: { description: "Thies, Senegal" },
    user: {
      nom: "Papi Diagne",
      avatar:
        "https://pickaface.net/gallery/avatar/unr_ouhuh_180824_0644_9i3yed.png",
      phone: "779450213",
      email: "papidiagne@domain.com",
      cni: "1849198900183"
    }
  },
  {
    date: "2018-10-10T09:46:00.000Z",
    from: { description: "Pikine, Senegal" },
    to: { description: "Thiaroye, Senegal" },
    user: {
      nom: "Modou Khoulé",
      avatar:
        "https://pickaface.net/gallery/avatar/unr_bigbubba_180824_0204_q7l9hsz.png",
      phone: "774343893",
      email: "modoukhoule@gmail.com",
      cni: "1934198100283"
    }
  },
  {
    date: "2018-08-24T10:16:00.000Z",
    from: { description: "Castor, Dakar" },
    to: { description: "Pout, Thies" },
    user: {
      nom: "Aminata Sarr",
      avatar:
        "https://pickaface.net/gallery/avatar/unr_anna_180824_1715_1891.png",
      phone: "775194382",
      email: "sarramina@gmail.com",
      cni: "2284199700384"
    }
  }
];

export default class Offre extends React.Component {
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
              <Text>Aucune offre disponible</Text>
            </View>
          </SideMenu>
        );
      }
    }
  }
}
