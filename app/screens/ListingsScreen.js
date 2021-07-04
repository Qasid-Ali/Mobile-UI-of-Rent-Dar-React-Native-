import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AddCard from "../components/AddCard";
import ScreenView from "../components/ScreenView";
import routes from "../navigation/routes";

const listing = [
  {
    id: 1,
    title: "Bike For Rent ",
    price: "100/hr",
    desc: "Unique 2009 good condition complete Docment",
    image: require("../assets/bike.png"),
  },
  {
    id: 2,
    title: "Couch for Rent ",
    price: "1000/day",
    desc: "Good couch",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Mehran Car",
    price: "500/hr",
    desc: "Mehran car 2010 Model good condition complete Docment",
    image: require("../assets/car.png"),
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
            // desc={item.desc}
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
