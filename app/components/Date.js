import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";

import ScreenView from "../components/ScreenView";

const Date = () => {
  const [date, setDate] = useState("");
  const [modifyDate, setModifyDate] = useState("");
  return (
    <ScreenView style={styles.container}>
      <View style={styles.detailContainer}>
        <DatePicker
          date={date}
          format="DD-MM-YYYY"
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Text style={styles.title}>To</Text>
        <DatePicker
          date={modifyDate}
          format="DD-MM-YYYY"
          onDateChange={(date) => {
            setModifyDate(date);
          }}
        />
      </View>
    </ScreenView>
  );
};

export default Date;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 16,
    paddingRight: 10,
  },
});
