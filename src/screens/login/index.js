import React from "react";
import { Image, StyleSheet, View, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextField } from "react-native-material-textfield";
import style from "../../config/styles";
import Button from "../../components/button";
import * as Helpers from "./Login";
export default class LoginIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  connecter = async () => {
    this.setState({ emailError: "", passwordError: "" });
    const email = this.state.email;
    const password = this.state.password;
    try {
      const valid = Helpers.checkEmail(this.state.email);
      if (!valid) {
        this.setState({
          emailError: "Email invalide"
        });
      } else {
        const ac_tok = Helpers.login(email, password);
        if (ac_tok != "error") {
          await AsyncStorage.setItem("access_token", JSON.stringify(ac_tok));
          console.log("go to home");
          this.props.navigation.navigate("HomeStack");
        } else {
          this.setState({
            passwordError: "Email ou mot de passe incorrect"
          });
        }
      }
    } catch (error) {
      alert("Erreur Application");
    }
  };
  static navigationOptions = {
    title: "Veuillez vous authentifier"
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled
      >
        <View style={styles.img}>
          <Image
            style={{ height: "50%", width: "85%", resizeMode: "contain" }}
            source={require("../../assets/images/logo.jpg")}
          />
        </View>
        <View style={styles.text}>
          <View>
            <Icon name="user" size={20} color={style.color} />
          </View>
          <View style={{ width: 250, height: 100, marginLeft: 5 }}>
            <TextField
              ref={ref => {
                this._ref = ref;
              }}
              keyboardType="email-address"
              fontSize={24}
              label="Adresse email"
              error={this.state.emailError}
              onChangeText={email => {
                this.setState({ email });
                this._ref.value = email;
              }}
            />
          </View>
        </View>
        <View style={styles.text}>
          <View>
            <Icon name="lock" size={20} color={style.color} />
          </View>
          <View style={{ width: 250, height: 100, marginLeft: 5 }}>
            <TextField
              ref={ref => {
                this._ref = ref;
              }}
              fontSize={24}
              secureTextEntry={true}
              label="Mot de passe"
              error={this.state.passwordError}
              onChangeText={password => {
                this.setState({ password });
                this._ref.value = password;
              }}
            />
          </View>
        </View>
        <View style={styles.valider}>
          <Button title="Valider" onPress={() => this.connecter()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  img: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 40,
    marginVertical: 5
  },
  valider: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40
  }
});
