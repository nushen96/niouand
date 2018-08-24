import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import styles from "../config/styles";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

export default class Row extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        infos: this.props.infos
      });
  }
  static propTypes = {
    infos: PropTypes.object,
    index: PropTypes.string
  };

  showMap = () => {
    const { date, from, to, user } = this.state.infos;
    alert(
      "Carte allant de " +
        from.description +
        " à " +
        to.description +
        "\n Nom: " +
        user.nom +
        "\n Telephone: " +
        user.phone +
        "\n Email: " +
        user.email +
        "\n CNI: " +
        user.cni
    );
  };

  date() {
    let date = moment(this.props.infos.date).format("DD/MM");
    return <Text style={style.bold}>{date}</Text>;
  }

  time() {
    let time = moment(this.props.infos.date).format("HH:mm");
    return <Text>{time}</Text>;
  }

  avatar() {
    const uri = this.props.infos.user.avatar;
    return <Image style={style.avatar} source={{ uri }} />;
  }

  render() {
    return (
      <TouchableOpacity style={style.view} onPress={this.showMap}>
        <View>{this.avatar()}</View>
        <View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={style.name}>{this.props.infos.user.nom}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={style.label}>De: </Text>
            <Text style={style.place}>{this.props.infos.from.description}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={style.label}>À: </Text>
            <Text style={style.place}>{this.props.infos.to.description}</Text>
          </View>
        </View>
        <View>
          <Text style={style.date}>{this.date()}</Text>
          <Text style={style.date}>{this.time()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  name: {
    color: styles.color,
    fontSize: 22
  },
  white: {
    color: styles.color
  },
  place: {
    color: "white"
  },
  bold: {
    fontWeight: "bold"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 5,
    flex: 1
  },
  label: {
    fontWeight: "bold",
    color: styles.color,
    fontSize: 20
  },
  view: {
    backgroundColor: "black",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    margin: 0,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  date: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22
  }
});
