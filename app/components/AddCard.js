import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function AddCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    marginVertical: 10,
    fontWeight: "bold",
    color: colors.primary,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
});

export default AddCard;
