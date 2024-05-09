import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store/index'; // Import your Redux store

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerShown="false">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Post Details" component={PostDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
