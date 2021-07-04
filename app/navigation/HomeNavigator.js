import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchBar } from "react-native-elements";
import { SafeAreaView, StatusBar } from "react-native";
import RequestNavigator from "./RequestNavigator";
import FeedNavigator from "./FeedNavigator";
import CategoryScreen from "../screens/CategoryScreen";

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <SearchBar
          round
          platform="android"
          clearIcon={true}
          placeholder="Search Item Here..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Feeds" component={FeedNavigator} />
        <Tab.Screen name="Request Items" component={RequestNavigator} />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigator;
