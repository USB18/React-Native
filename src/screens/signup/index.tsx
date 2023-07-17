import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
} from "react-native";
import ReusableTextInput from "../../components/reusable-input";
import ReusableButton from "../../components/reusable-button";
import ReusableHeader from "../../components/reusable-header";
import ReusableFooter from "../../components/reusable-footer";
import { IMAGES, getImageFromURL } from "../../constants/images";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = ({ navigation }: any) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    const handlePress = async () => {
        const nameError = validateName(state.name);
        const emailError = validateEmail(state.email);
        const passwordError = validatePassword(state.password);

        setErrors({
            nameError,
            emailError,
            passwordError,
        });

        if (!nameError && !emailError && !passwordError) {
            try {
                const userData = {
                    name: state.name,
                    email: state.email,
                    password: state.password,
                };
                await AsyncStorage.setItem("userData", JSON.stringify(userData));
                navigation.navigate("Login", { params: "Singup" })
            } catch (error) {
                console.log("Error saving data to AsyncStorage:", error);
            }
        }
    };

    const validateName = (name: string) => {
        const trimmedName = name.trim();
        const regex = /^[A-Za-z]+$/;

        if (!trimmedName) {
            return "Name is required";
        } else if (!regex.test(trimmedName)) {
            return "Invalid name";
        }
        return "";
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

    const onChangeName = (name: string) => {
        const nameError = validateName(name);
        setState({
            ...state,
            name,
        });
        setErrors({
            ...errors,
            nameError,
        });
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
             enableOnAndroid={true}
                extraScrollHeight={150} // Adjust this value as per your requirements
            >
                <ReusableHeader
                    imageSource={getImageFromURL(IMAGES.CLOSE)}
                    onPress={() => navigation.navigate("Onboard")}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{"Let’s Start"}</Text>

                    <View style={styles.inputContainer}>
                        <ReusableTextInput
                            placeholder="Full Name"
                            imageSource={getImageFromURL(IMAGES.EMAIL)}
                            value={state.name}
                            onChangeText={onChangeName}
                        />
                        {errors.nameError ? (
                            <Text style={styles.errorText}>{errors.nameError}</Text>
                        ) : null}

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

                    <ReusableButton title="Sign Up" onPress={handlePress} />

                    <ReusableFooter text="Terms & Conditions" />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};



export default Signup;
