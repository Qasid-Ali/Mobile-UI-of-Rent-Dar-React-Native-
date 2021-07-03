import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItems from "../components/lists/ListItems";
import ScreenView from "../components/ScreenView";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "First Item",
    description: "Good.How are You",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Second Item",
    description: "Good.How are You",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Third Item",
    description: "Good.How are You",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessage);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <ScreenView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
