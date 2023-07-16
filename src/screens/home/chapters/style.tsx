import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 75,
        marginBottom: 15,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    idText: {
        fontSize: 16,
        color: "#444444",
    },
    textContainer: {
        marginLeft: 10,
    },
    subjectText: {
        fontSize: 16,
        color: "#444444",
    },
    chapterContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    chapterText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#878A9A",
    },
    divider: {
        width: 1.3,
        height: 13,
        backgroundColor: "#878A9A",
        marginHorizontal: 8,
    },
    durationText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#878A9A",
    },
    icon: {
        width: 16,
        height: 16,
    },
    subContainer: {
        width: 28,
        height: 28,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#444444",
        justifyContent: "center",
        alignItems: "center",
    },
    lockIcon: {
        width: 9,
        height: 13,
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
        fontSize: 16,
        marginTop: 5,
    },
    footerContainer: {
        height: 80,
        backgroundColor: '#FFF9F9',
        justifyContent: 'center',
    },
    movieDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    movieInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    movieImage: {
        width: 56,
        height: 56,
    },
    movieInfoText: {
        marginLeft: 15,
    },
    movieTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: '#444444',
    },
    actorText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#878A9A',
    },
    playButton: {
        width: 9,
        height: 12,
    },
    rightArrow: {
        marginLeft: 20,
        width: 12,
        height: 16,
    },
    playButtonContainer: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: "#ED1B2F",
        alignItems: "center",
        justifyContent: "center"
    },
    progressBar: {
        width: "30%",
        height: 2,
        backgroundColor: "red",
        position: "absolute",
        top: 0
    }
});



export default styles