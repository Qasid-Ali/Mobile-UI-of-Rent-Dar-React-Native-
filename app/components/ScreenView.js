import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

function ScreenView({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default ScreenView;
