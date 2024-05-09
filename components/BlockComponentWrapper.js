// BlockComponentWrapper.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
// import axios from "axios";
import { Provider } from 'react-redux';
import BlockComponent from "./BlockComponent";

const BlockComponentWrapper = () => {
  const handleViewPress = () => {
    console.log("View Pressed!");
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.rowContainer}>
          <BlockComponent
            // delivery={item.brand}
            // onPress={handleViewPress}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 2,
    backgroundColor: "#fff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default BlockComponentWrapper;
