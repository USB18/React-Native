import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4E1E7",
    },
    image: {
        marginTop: 30,
    },
    contentContainer: {
        paddingHorizontal: 40,
        marginTop: 50,
    },
    welcomeText: {
        fontWeight: "600",
        fontSize: 50,
        color: "#DCC2CA",
        lineHeight: 60,
        textAlign: "left",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});

export default styles