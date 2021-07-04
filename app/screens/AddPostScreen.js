import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import ScreenView from "../components/ScreenView";

function AddPostScreen({ navigation }) {
  return (
    <ScreenView style={styles.container}>
      <AppButton
        title="Add Request"
        onPress={() => navigation.navigate("Request")}
      />
    </ScreenView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default AddPostScreen;
