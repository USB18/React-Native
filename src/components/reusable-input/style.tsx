import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    input: {
        flex: 1,
        height: 40,
        paddingVertical: 5,
        paddingEnd: 5,
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
        color: "#353A48",
    },
    focusedInput: {
        borderBottomWidth: 1,
        borderColor: '#353A48', // Replace with your desired color
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});

export default styles