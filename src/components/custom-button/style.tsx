import { Platform, StyleSheet } from "react-native";

const style=StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 4,
    },
    mainText:{
        fontWeight: '500',
    },
    downloadText:{
        fontWeight: '400',
        fontSize: 14,
    }
})

export default style