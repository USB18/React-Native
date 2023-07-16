import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#444444",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 18,
    },
    profile:{ width: 30, height: 30 },
    name: {
        fontWeight: "600",
        fontSize: 18,
        color: "#444444",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    date: {
        fontWeight: "500",
        fontSize: 15,
        color: "#878A9A",
        marginLeft: 5,
    },
    description: {
        fontWeight: "400",
        fontSize: 16,
        color: "#444444",
    },
    bottomHighlight: {
        width: "100%",
        height: 1.5,
        backgroundColor: "#F2F2F2",
    },
});

export default styles