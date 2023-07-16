import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    headerContainer: {
        height: 70,
        backgroundColor: "#FBFBFB",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    backArrowIcon: {
        width: 21,
        height: 21,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#444444",
        marginLeft: 15,
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    shareIcon: {
        width: 20,
        height: 21,
        marginRight: 10,
    },
    bookmarkIcon: {
        width: 26,
        height: 24,
    },
})

export default style