import React from "react";
import * as Yup from "yup";
import { ScrollView, StyleSheet } from "react-native";

import AppForm from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import FormPicker from "../components/forms/FormPicker";
import ScreenView from "../components/ScreenView";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Date from "../components/Date";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
});

const locations = [
  {
    label: "Sialkot",
    value: 1,
  },
  {
    label: "Rawalpindi",
    value: 2,
  },
  {
    label: "Islamabad",
    value: 3,
  },
  {
    label: "Quetta",
    value: 4,
  },
  {
    label: "Peshawar",
    value: 5,
  },
  {
    label: "Lahore",
    value: 6,
  },
  {
    label: "Karachi",
    value: 7,
  },
  {
    label: "Chakwal",
    value: 8,
  },
  {
    label: "Multan",
    value: 9,
  },
];
function PostRequestScreen(props) {
  return (
    <ScreenView style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price Range"
          />
          <FormPicker
            items={locations}
            name="category"
            placeholder="Select Location"
          />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <FormField name="date" editable={false} placeholder="Select Date" />
          <Date />
          <SubmitButton title="Post Request" />
        </AppForm>
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default PostRequestScreen;
