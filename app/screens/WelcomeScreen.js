import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContanier}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Rent It. You don't any more.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="SignUp" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContanier: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "900",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
