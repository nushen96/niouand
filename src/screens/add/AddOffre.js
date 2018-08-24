import React from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import style from "../../config/styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePicker from "react-native-modal-datetime-picker";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};
const infosArray = [];

export default class AddOffre extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        from: null,
        to: null,
        date: {},
        isDateTimePickerVisible: false,
        selectedDate: ""
      });
  }

  static navigationOption = {
    title: "Ajouter une offre"
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ date: date });
    this._hideDateTimePicker();
  };

  confirmer = () => {
    const infos = {
      from: this.state.from,
      to: this.state.from,
      date: this.state.date
    };
    infosArray.push(infos);
    alert(
      "From: " +
        this.state.from +
        " | To: " +
        this.state.to +
        " | Date: " +
        this.state.date
    );
  };

  componentWillUnmount = async () => {
    console.log(infosArray);

    await AsyncStorage.setItem("infosArray", infosArray);
  };

  render() {
    return (
      <View style={style.container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <GooglePlacesAutocomplete
            placeholder="Depart"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            fetchDetails={false}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              this.setState({ from: data });
              console.log(data);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyBTkTvuqMujdloc8wrk6a-QY0UyMTfpO8k",
              language: "en", // language of the results
              types: "(cities)" // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: style.color
              },
              description: {
                fontWeight: "bold"
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
              types: "food"
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <GooglePlacesAutocomplete
            placeholder="Destination"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              this.setState({ to: data });
              console.log(data);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyBTkTvuqMujdloc8wrk6a-QY0UyMTfpO8k",
              language: "en", // language of the results
              types: "(cities)" // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: style.color
              },
              description: {
                fontWeight: "bold"
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
              types: "food"
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          />
        </View>
        <View style={style.container}>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={style.button}>
              <Text style={style.buttonText}>Choisir date</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ margin: 5, color: style.color }}>
            {this.state.date.toString()}
          </Text>
          <DateTimePicker
            confirmTextStyle={{ color: style.color }}
            cancelTextStyle={{ color: "red" }}
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="datetime"
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity onPress={this.confirmer}>
            <View style={style.button}>
              <Text style={style.buttonText}>Confirmer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
