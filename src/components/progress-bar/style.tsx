import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        width: 185,
        height: 11,
        backgroundColor: '#eee',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 10
    },
    numberStyle: {
        fontWeight: "400",
        fontSize: 13.5,
        color: "#000000"
    },
    fill: {
        height: '100%',
        backgroundColor: '#FAB606',
        borderRadius: 10,
    },
    starStyle: {
        width: 11,
        height: 11,
        marginLeft: 2
    }
});

export default styles