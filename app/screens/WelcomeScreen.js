import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContanier}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Rent & Save It. You don't need it.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Text
          style={styles.skipText}
          onPress={() => navigation.navigate("Home")}
        >
          Skip Now
        </Text>
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
  skipText: {
    color: colors.primary,
    alignSelf: "center",
  },
});

export default WelcomeScreen;
