import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  AsyncStorage
} from "react-native";

const window = Dimensions.get("window");
const uri =
  "https://pickaface.net/gallery/avatar/unr_ouhuh_180824_0644_9i3yed.png";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "#e0e0e0"
  },
  avatarContainer: {
    flex: 2,
    backgroundColor: "#ff2100",
    margin: 0,
    paddingVertical: 20,
    paddingLeft: 15
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: "absolute",
    left: 70,
    top: 35,
    fontWeight: "bold",
    color: "white"
  },
  itemsContainer: {
    flex: 3,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "300",
    paddingTop: 5
  },
  selectedItem: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ff2100"
  },
  sectionTitle: {
    color: "gray",
    fontSize: 15,
    marginBottom: 5
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingBottom: 5
  },
  lastSection: {
    borderBottomWidth: 0,
    marginBottom: 20,
    paddingBottom: 5
  }
});

export default function Menu({ onItemSelected }) {
  logout = async () => {
    alert("Logout OK");
  };
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri }} />
        <Text style={styles.name}>Papi Diagne</Text>
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.sectionTitle}>Historique</Text>
        <View style={styles.section}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="home" size={27} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("Home")}
              style={[styles.item, styles.selectedItem]}
            >
              Accueil
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="gift" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("MesOffres")}
              style={styles.item}
            >
              Mes Offres
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="search" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("MesDemandes")}
              style={styles.item}
            >
              Mes demandes
            </Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Concernant l'application</Text>
        <View style={styles.section}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="pencil" size={20} color="#ff2100" />
            <Text onPress={() => onItemSelected("RateUs")} style={styles.item}>
              Noter l'application
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="question" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("FrequentsQuestions")}
              style={styles.item}
            >
              Questions Fréquentes
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="phone" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("ContactUs")}
              style={styles.item}
            >
              Nous Contacter
            </Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Mon compte</Text>
        <View style={styles.lastSection}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="cog" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("Parametres")}
              style={styles.item}
            >
              Paramètres
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="language" size={20} color="#ff2100" />
            <Text
              onPress={() => onItemSelected("ChangeLanguage")}
              style={styles.item}
            >
              Changer de langue
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon name="sign-out" size={20} color="#ff2100" />
            <Text
              onPress={() => {
                onItemSelected("Logout");
                this.logout();
              }}
              style={styles.item}
            >
              Déconnexion
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};
