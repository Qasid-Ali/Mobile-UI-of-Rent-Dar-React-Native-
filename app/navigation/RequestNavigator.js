import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostRequestScreen from "../screens/PostRequestScreen";
import AddPostScreen from "../screens/AddPostScreen";

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Post" component={AddPostScreen} />
    <Stack.Screen name="Request" component={PostRequestScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;
