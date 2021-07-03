import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";

const Tab = createMaterialTopTabNavigator();

const CategoryNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="FirstPage" component={FeedNavigator} />
    <Tab.Screen name="SecondPage" component={AccountNavigator} />
  </Tab.Navigator>
);

export default CategoryNavigator;
