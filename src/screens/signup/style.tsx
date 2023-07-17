import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEFFA",
    },
    contentContainer: {
        paddingHorizontal: 40,
        marginTop: 30,
    },
    title: {
        fontWeight: "600",
        fontSize: 50,
        color: "#D7DBE7",
        lineHeight: 60,
        textAlign: "left",
    },
    inputContainer: {
        marginTop: 50,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
      },
});

export default styles