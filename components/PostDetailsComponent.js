// components/PostDetailsComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetailsComponent = ({ id, title, body }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.idContainer}>
        <Text style={styles.idLabel}>ID: </Text>
        <Text style={styles.id}>{id}</Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  idContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns the ID section to the right
    marginBottom: 10,
  },
  idLabel: {
    fontSize: 16,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default PostDetailsComponent;
