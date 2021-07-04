import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItems from "../components/lists/ListItems";
import ScreenView from "../components/ScreenView";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "username123",
    description: "Good.How are You",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "username123",
    description: "Good.How are You",
    image: require("../assets/icon.png"),
  },
  {
    id: 3,
    title: "username123",
    description: "Good.How are You",
    image: require("../assets/icon.png"),
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
