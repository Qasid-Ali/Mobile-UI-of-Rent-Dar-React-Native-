import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItems from "../components/lists/ListItems";
import Icon from "../components/Icon";
import ScreenView from "../components/ScreenView";
import routes from "../navigation/routes";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies's",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Others",
    value: 9,
  },
];

function CategoryScreen({ navigation }) {
  return (
    <ScreenView>
      <FlatList
        data={categories}
        numColumns={3}
        renderItem={({ item }) => (
          <ListItems
            style={styles.listItem}
            title={item.label}
            onPress={() => navigation.navigate("Category", item)}
            imageComponent={
              <Icon name={item.icon} backgroundColor={item.backgroundColor} />
            }
          />
        )}
      />
    </ScreenView>
  );
}
const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: "column",
  },
});

export default CategoryScreen;
