import { createStackNavigator } from "react-navigation";
import AddDemande from "./AddDemande";
import AddOffre from "./AddOffre";

export const AddStack = createStackNavigator(
  {
    AddOffre: AddOffre,
    AddDemande: AddDemande
  },
  {
    initialRouteName: "AddOffre"
  }
);
