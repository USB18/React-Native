import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    daysContainer: {
        flexDirection: 'row',
    },
    dayContainer: {
        width: 50,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#CECFD5',
        marginHorizontal: 6,
        borderRadius: 10,
    },
    weekNameText: {
        fontSize: 12,
        fontWeight: "400",
        marginTop: 5,
    },
    dayText: {
        fontSize: 20,
    },
    currentDayText: {
        fontSize: 20,
        fontWeight: '500'
    },
});

export default styles