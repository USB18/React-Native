import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    shadowContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: '#fff',
    },
    contentContainer: {
        height: 90,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        color: '#ED1B2F',
        fontWeight: '600',
        fontSize: 16,
    },
    originalPriceText: {
        color: '#878A9A',
        fontWeight: '400',
        fontSize: 12,
        marginLeft: 5,
        textDecorationLine: 'line-through',
    },
    titleText: {
        color: '#444444',
        fontWeight: '600',
        fontSize: 14,
        //  marginTop: 5,
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 18,
        color: "#444444",
        margin: 20
    },
    estimatedText: {
        fontWeight: "400",
        fontSize: 12,
        color: "#878A9A"
    },
    listItemContainer: {
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: "#FBFBFB",
        paddingHorizontal: 15,
    },
    subjectText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#444444"
    },
    durationText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#878A9A"
    },
    taskText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#444444"
    },
    taskCountText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#878A9A"
    },
    arrowIcon: {
        width: 16,
        height: 16,
        transform: [{ rotate: '180deg' }]
    },
    // Style for iOS ONLY...
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
    divider:{
         marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#E5E7EB" 
    },
    scheduledTimeContainer:{
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",

    },
    scheduledTimeLabel:{
        fontSize: 14,
        fontWeight: "400",
        color: "#444444"
    },
    scheduledTimeText:{
        fontSize: 14,
        fontWeight: "400",
        color: "#444444",
        textDecorationLine: "underline",
        textDecorationStyle: "dotted"
    },
    listItemHeader:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default style