import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import ListItems from "../components/lists/ListItems";

function ListingDetailScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={listing.image} />
        <View style={styles.detailConatiner}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.desc}>{listing.desc}</Text>
          <Text style={styles.price}>${listing.price}</Text>
        </View>
        <ListItems
          image={require("../assets/icon.png")}
          title="Username"
          subTitle="4 Listing"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    color: colors.primary,
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 10,
  },
});

export default ListingDetailScreen;
