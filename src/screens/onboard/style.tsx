import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E2F2E8"
    },
    topView: {
        alignSelf: "flex-end",
        marginTop: 85
    },
    heading: {
        fontWeight: "600",
        fontSize: 20,
        color: "#353A48",
        lineHeight: 24,
    },
    description: {
        fontWeight: "500",
        fontSize: 14,
        color: "#353A48",
        lineHeight: 20,
        textAlign: "left",
        marginTop: 15,
    },
    buttonContainer: {
        marginTop: 50,
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#353A48",
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 27,
        color: "#353A48",
    },
    loginButton: {
        width: 150,
        height: 48,
        backgroundColor: "#353A48",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    singUpbutton: {
        width: 147,
        height: 48,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles