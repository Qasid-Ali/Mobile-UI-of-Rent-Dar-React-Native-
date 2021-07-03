import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Yup from "yup";

import ScreenView from "../components/ScreenView";
import colors from "../config/colors";
import AppForm from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <ScreenView style={styles.container}>
      <Text style={styles.text}>Register Yourself</Text>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: colors.medium,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default RegisterScreen;
