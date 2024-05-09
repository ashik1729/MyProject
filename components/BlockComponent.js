import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { useNavigation } from '@react-navigation/native';

const BlockComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const [pressedIndex, setPressedIndex] = useState(null);

  const handlePressIn = (index) => {
    setPressedIndex(index);
  };

  const handlePressOut = () => {
    setPressedIndex(null);
  };

  const handlePress = (id, title, body) => {
    navigation.navigate('Post Details', { id, title, body });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      {posts && posts.map((post, index) => (
        <TouchableOpacity
          key={post.id}
          style={[styles.post, index === pressedIndex && styles.zoom]}
          onPressIn={() => handlePressIn(index)}
          onPressOut={handlePressOut}
          onPress={() => handlePress(post.id, post.title, post.body)}
        >
          <Text style={styles.postTitle}>{post.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:"center"
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
