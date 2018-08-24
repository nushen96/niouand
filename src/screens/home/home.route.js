import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import style from "../../config/styles";
//import AddStack from "../add/add.route";
import Demande from "./demande/Demande";
import Offre from "./offre/Offre";
import AddOffre from "../add/AddOffre";
import AddDemande from "../add/AddDemande";

const AddStack = isOffer => {
  return createStackNavigator(
    {
      Index: {
        screen: isOffer ? Offre : Demande,
        navigationOptions: () => ({
          title: null,
          header: null
        })
      },
      AddOffre: AddOffre,
      AddDemande: AddDemande
    },
    { initialRouteName: "Index" }
  );
};

export const HomeStack = createMaterialTopTabNavigator(
  {
    Offre: AddStack(true),
    Demande: AddStack(false)
  },
  {
    initialRouteName: "Offre",
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      showIcon: false,
      style: {
        backgroundColor: style.color,
        borderTopWidth: 1,
        borderTopColor: "#3f101c"
      },
      indicatorStyle: {
        backgroundColor: "white",
        height: 2
      }
    }
  }
);
