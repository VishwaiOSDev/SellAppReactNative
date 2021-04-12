import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Image, View } from "react-native";
import * as Yup from "yup";

import { AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => console.log(value)}
          validationSchema={validationSchema}
        >
          <AppFormField
            placeholder="Email"
            icon="email"
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            placeholder="Password"
            name="password"
            autoCorrect={false}
            icon="lock"
            textContentType="password"
            secureTextEntry
          />
          <SubmitButton title="Login" color="primary" />
        </AppForm>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
