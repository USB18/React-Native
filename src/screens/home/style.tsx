import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    sliderItemContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: height / 2.1,
        width: width,
    },
    sliderItemInnerContainer: {
        width: "90%",
        height: "92%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CECFD5",
        alignItems: "center",
        justifyContent: "center",
    },
    playIcon: {
        position: "absolute"
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerDot: {
        height: 7,
        width: 7,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        marginHorizontal: 2,
    },
    footerDotActive: {
        width: 10, backgroundColor: "#ED1B2F"
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contentHeaderText: {
        fontWeight: "500",
        fontSize: 20,
        color: "#444444"
    },
    flatlistView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    ratingContainer: {
        height: 32,
        width: 66,
        backgroundColor: "#60AB15",
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ratingText: {
        fontWeight: "600",
        fontSize: 16,
        color: "white",
        marginRight: 3
    },
    rateIcon: {
        height: 15,
        width: 15,
        marginLeft: 3
    },
    metaDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    metadataText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#878A9A"
    },
    metaDataContent: {
        fontSize: 14,
        fontWeight: "400",
        color: "#010104"
    },
    divider: {
        width: 1.3,
        height: 12,
        backgroundColor: "#010104",
        marginHorizontal: 8
    },
    contentText: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20,
        color: "#878A9A"
    },
    switchView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
       // paddingHorizontal: 30
    },
    firstSwitchView: {
        flexDirection: "row",
        alignItems: "center"
    },
    firstSwitchText: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 24
    },
    switchNumberView: {
        width: 26,
        height: 24,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginBottom: 24
    },
    switchNumber: {
        fontWeight: "500",
        fontSize: 14,
    },
    bottomView: {
        borderBottomWidth: 3,
        borderBottomColor: "#ED1B2F"
    },
    secondSwitchText: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 24
    }
})

export default style