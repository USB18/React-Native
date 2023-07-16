import React from "react"
import { SafeAreaView, Text, View } from "react-native"

const Playlist=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text>{"Playlist"}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Playlist