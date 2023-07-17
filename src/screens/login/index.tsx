import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { IMAGES, getImageFromURL } from "../../constants/images";
import ReusableTextInput from "../../components/reusable-input";
import ReusableButton from "../../components/reusable-button";
import ReusableHeader from "../../components/reusable-header";
import ReusableFooter from "../../components/reusable-footer";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = (props: any) => {
  const { route: { params: { params } } } = props

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleNavigateToOnboard = () => {
    props.navigation.navigate("Onboard");
  };

  const handlePress = async () => {
    const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);

    setErrors({
      emailError,
      passwordError,
    });

    if (!emailError && !passwordError) {
      try {
        const response = await AsyncStorage.getItem("userData");
        const result = response ? JSON.parse(response) : null;
        if (result && result.email == state.email && result.password == state.password) {
          Alert.alert(`Welcome ${result.name} you are logged in`)
        } else {
          Alert.alert(`Wrong credentials`)
        }
      } catch (error) {
        console.log("Error saving data to AsyncStorage:", error);
      }
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Invalid email";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!password) {
      return "Password is required";
    } else if (!passwordRegex.test(password)) {
      return "Invalid password";
    }
    return "";
  };

  const onChangeEmail = (email: string) => {
    const emailError = validateEmail(email);
    setState({
      ...state,
      email,
    });
    setErrors({
      ...errors,
      emailError,
    });
  };

  const onChangePassword = (password: string) => {
    const passwordError = validatePassword(password);
    setState({
      ...state,
      password,
    });
    setErrors({
      ...errors,
      passwordError,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        extraScrollHeight={150}
        enableOnAndroid={true}
      >
        <ReusableHeader
          imageSource={getImageFromURL(IMAGES.CLOSE)}
          onPress={handleNavigateToOnboard}
        />

        {
          params != "Singup" ?
            <Image
              source={getImageFromURL(IMAGES.LOGIN)}
              resizeMode="contain"
              style={styles.image}
            />
            : null
        }


        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome{"\n"}Back!</Text>

          <View style={{ marginTop: 25 }}>
            <ReusableTextInput
              placeholder="Email Address"
              imageSource={getImageFromURL(IMAGES.EMAIL)}
              value={state.email}
              onChangeText={onChangeEmail}
            />
            {errors.emailError ? (
              <Text style={styles.errorText}>{errors.emailError}</Text>
            ) : null}

            <ReusableTextInput
              placeholder="Password"
              imageSource={getImageFromURL(IMAGES.LOCK)}
              value={state.password}
              onChangeText={onChangePassword}
            />
            {errors.passwordError ? (
              <Text style={styles.errorText}>{errors.passwordError}</Text>
            ) : null}
          </View>

          <ReusableButton title="Login" onPress={handlePress} />

          <ReusableFooter text="Forgot Password?" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
