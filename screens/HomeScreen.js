// HomeScreen.js

import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "./../components/Header";

import BlockComponentWrapper from "./../components/BlockComponentWrapper";
const HomeScreen = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    //   <Text>Welcome to Home Screen!</Text>
    // </View>
    <SafeAreaView style={styles.container}>
      {/* <ThumbnailBlock /> */}
      <Header />
      <ScrollView>
          <BlockComponentWrapper />
        {/* <Text>Ashik</Text> */}
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default HomeScreen;
