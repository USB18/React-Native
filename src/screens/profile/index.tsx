import React from "react"
import { SafeAreaView, Text, View } from "react-native"

const Profile=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text>{"Profile"}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile