import React from "react";
import { StyleSheet, View } from "react-native";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}
const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default ListItemSeperator;
