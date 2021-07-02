import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AddCard from "../components/AddCard";
import ScreenView from "../components/ScreenView";

const listing = [
  {
    id: 1,
    title: "Red Jacket",
    price: 1000,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale",
    price: 2000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <ScreenView style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AddCard
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: "#fef5f5",
  },
});

export default ListingsScreen;
