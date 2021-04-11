import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => console.log(value)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                autoCapitalize="none"
                placeholder="Password"
                autoCorrect={false}
                icon="lock"
                onBlur={() => setFieldTouched("password")}
                textContentType="password"
                secureTextEntry
                onChangeText={handleChange("password")}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <AppButton title="Login" color="primary" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
