import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AddCard from "../components/AddCard";
import ScreenView from "../components/ScreenView";
import routes from "../navigation/routes";

const listing = [
  {
    id: 1,
    title: "Red Jacket",
    price: 1000,
    desc: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale",
    price: 2000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Red Jacket",
    price: 1000,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Couch for sale",
    price: 2000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <ScreenView style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AddCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            desc={item.desc}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
