import { createStackNavigator } from "react-navigation";
// Login Side
import LoginIndex from "../screens/login/index";
import { HomeStack } from "./../screens/home";

export const LoginStack = loggedIn => {
  return createStackNavigator(
    {
      LoginIndex: { screen: LoginIndex },
      HomeStack: { screen: HomeStack }
    },
    {
      initialRouteName: loggedIn ? "HomeStack" : "LoginIndex",
      mode: "modal",
      headerMode: "none",
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  );
};
