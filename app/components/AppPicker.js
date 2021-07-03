import React, { useState } from "react";
import {
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import ScreenView from "../components/ScreenView";
import PickerItem from "../components/PickerItem";

function AppPicker({
  icon,
  items,
  selectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.contianer}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.primary}
            style={styles.icon}
          />

          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <ScreenView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </ScreenView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    backgroundColor: colors.light,
    borderRadius: 25,
    overflow: "scroll",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    paddingRight: 10,
  },
});
export default AppPicker;
