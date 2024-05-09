// screens/PostDetailsScreen.js
import React from 'react';
import { View } from 'react-native';
import PostDetailsComponent from '../components/PostDetailsComponent';

const PostDetailsScreen = ({ route }) => {
  const { id, title, body } = route.params;

  return (
    <View>
      <PostDetailsComponent id={id} title={title} body={body} />
    </View>
  );
};

export default PostDetailsScreen;
