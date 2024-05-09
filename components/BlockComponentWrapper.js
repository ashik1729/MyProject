import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import BlockComponent from "./BlockComponent";

// Component responsible for rendering BlockComponent within a wrapper
const BlockComponentWrapper = () => {
  // State to manage loading state
  const [isLoading, setLoading] = useState(true);

  // State to manage data
  const [data, setData] = useState([]);

  return (
    <View style={styles.pageContainer}>
      {/* Container for BlockComponent */}
      <View style={styles.rowContainer}>
        {/* Render BlockComponent */}
        <BlockComponent />
      </View>
    </View>
  );
};

// Styles for BlockComponentWrapper
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 2,
    backgroundColor: "#fff", // Background color
  },
  rowContainer: {
    flexDirection: "row", // Layout direction
    justifyContent: "space-between", // Alignment of items
    marginBottom: 16, // Margin bottom
  },
});

export default BlockComponentWrapper;
