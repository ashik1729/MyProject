import React, { useState } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import logo from "./../assets/mylogo.png"; // Import your logo image
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
const Header = ({ navigation }) => {
  const handleLogoPress = () => {
    // Navigate to the home screen when the logo is pressed
    navigation.navigate('Home'); // Replace 'Home' with the name of your home screen component
  };
  return (
    <View style={[styles.header, Platform.OS === "ios" && styles.headerIos]}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "#2a55e5",
  },
  headerIos: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    marginTop: 0,
    backgroundColor: "#2a55e5",
  },
  logo: {
    width: 30,
    height: 30,
  },
  nav: {
    flexDirection: "row",
  },
  menuItem: {
    paddingLeft: 10,
    fontWeight: "500",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    position: "relative",
  },
  searchIcon: {
    marginRight: 5,
    position: "absolute",
    right: 0,
    top: -10,
    color: "red",
  },
  searchInput: {
    height: 35,
    // flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 30,
  },
});

export default Header;
