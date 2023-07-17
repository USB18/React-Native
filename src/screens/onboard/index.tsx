import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { IMAGES, getImageFromURL } from "../../constants/images";
import ReusableFooter from "../../components/reusable-footer";
import styles from "./style";
import constants from "../../constants";

const Onboard = ({ navigation }: any) => {
    const handleLogin = () => {
        navigation.navigate("Login", { params: "Onboard" });
    };

    const handleSignup = () => {
        navigation.navigate("Signup");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Image
                    source={getImageFromURL(IMAGES.ONBORAD)}
                    resizeMode="contain"
                />
            </View>
            <View style={{ paddingHorizontal: 46, marginTop: 50 }}>
                <Text style={styles.heading}>{"We are here"}</Text>
                <Text style={styles.description}>
                    {"Your search is over here. We provide great figma designs to use in your project."}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={constants.appConstants.activeOpacity}
                        onPress={handleLogin}
                        style={styles.loginButton}>
                        <Text style={[styles.buttonText, { color: "white" }]}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        activeOpacity={constants.appConstants.activeOpacity}
                        onPress={handleSignup}
                        style={styles.singUpbutton}>
                        <Text style={styles.buttonText}>
                            {"SignUp"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ReusableFooter text="App Version 1.0.0" fontSize={10} />
        </SafeAreaView>
    );
};

export default Onboard;
