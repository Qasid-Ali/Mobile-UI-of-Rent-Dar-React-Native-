import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import ListItems from "../components/lists/ListItems";

function ListingDetailScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailConatiner}>
        <Text style={styles.title}>{listing.title}</Text>
        <View style={styles.container}>
          <Text>{listing.desc}</Text>
          <Text style={styles.price}>${listing.price}</Text>
        </View>
      </View>
      <ListItems
        image={require("../assets/mosh.jpg")}
        title="Qasid Ali"
        subTitle="4 Listing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailConatiner: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "500" },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default ListingDetailScreen;
