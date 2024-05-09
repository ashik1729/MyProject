import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { useNavigation } from '@react-navigation/native';

// Component responsible for displaying a list of posts
const BlockComponent = () => {
  // Navigation hook
  const navigation = useNavigation();

  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Fetch posts from Redux store on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Select posts, loading, and error state from Redux store
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  // State to manage the index of the pressed post
  const [pressedIndex, setPressedIndex] = useState(null);

  // Handler for touch down event
  const handlePressIn = (index) => {
    setPressedIndex(index);
  };

  // Handler for touch up event
  const handlePressOut = () => {
    setPressedIndex(null);
  };

  // Handler for post press event
  const handlePress = (id, title, body) => {
    navigation.navigate('Post Details', { id, title, body });
  };

  // Render loading state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Render error state
  if (error) {
    // Show alert if there are no posts or an error occurs
    Alert.alert(
      'Error',
      error ? `Error: ${error}` : 'No posts available',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ],
      { cancelable: false }
    );
    // Return null to prevent rendering of the component
    return null;
  }

  // Render posts
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Posts</Text>
  
      {/* Check if posts is not null or undefined, and if it's an array */}
      {posts && Array.isArray(posts) && posts.length > 0 ? (
        // If posts exist and is not empty, map over it
        posts.map((post, index) => (
          <TouchableOpacity
            key={post.id}
            style={[styles.post, index === pressedIndex && styles.zoom]}
            onPressIn={() => handlePressIn(index)}
            onPressOut={handlePressOut}
            onPress={() => handlePress(post.id, post.title, post.body)}
          >
            <Text style={styles.postTitle}>{post.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        // If posts is null, undefined, or empty, display a message
        <Text>No posts available</Text>
      )}
    </View>
  );
};

// Styles for BlockComponent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  postTitle: {
    fontSize: 16,
  },
  zoom: {
    transform: [{ scale: 1.1 }],
  },
});

export default BlockComponent;
