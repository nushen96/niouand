import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
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
    fontSize: 17,
    fontWeight: "300",
    paddingTop: 5
  },
  selectedItem: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ff2100"
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingBottom: 5
  }
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri }} />
        <Text style={styles.name}>Papi Diagne</Text>
      </View>
      <View style={styles.itemsContainer}>
        <View style={styles.section}>
          <Text
            onPress={() => onItemSelected("Home")}
            style={[styles.item, styles.selectedItem]}
          >
            Accueil
          </Text>
          <Text onPress={() => onItemSelected("MesOffres")} style={styles.item}>
            Mes Offres
          </Text>

          <Text
            onPress={() => onItemSelected("MesDemandes")}
            style={styles.item}
          >
            Mes demandes
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            onPress={() => onItemSelected("Parametres")}
            style={styles.item}
          >
            Paramètres
          </Text>
          <Text onPress={() => onItemSelected("Logout")} style={styles.item}>
            Déconnexion
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};
