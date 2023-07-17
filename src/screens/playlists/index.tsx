import React, { useState } from "react"
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import CustomHeader from "../../components/custom-header/custom-header"
import style from "./style"
import DaysList from "../../components/custom-day-week"
import { IMAGES, getImageFromURL } from "../../constants/images"
import CustomButton from "../../components/custom-button/custom-button"
import constants from "../../constants"
import CustomSwitch from "../../components/custom-switch"

const subject_timing = [
    {
        key: 1,
        subject: "Math",
        duration: "01:30 hours",
        tasks: "0/12",
        selected: false
    },
    {
        key: 2,
        subject: "English",
        duration: "01:30 hours",
        tasks: "0/12",
        selected: false
    },
    {
        key: 3,
        subject: "Reasoning",
        duration: "00:30 hours",
        tasks: "0/12",
        selected: false
    },
    {
        key: 4,
        subject: "GA - History",
        duration: "01:00 hours",
        tasks: "0/12",
        selected: false
    }
]

const Playlist = () => {
    const [data, setdata] = useState(subject_timing)

    const updateSelected = (itemId: any) => {
        const updatedData = data.map((item) => {
            if (item.key == itemId) {
                return {
                    ...item,
                    selected: !item.selected
                }
            } else {
                return item
            }
        })
        setdata(updatedData)
    }

    const renderItem = ({ item }: any) => {
        return (
            <View style={style.listItemContainer}>
                <View>
                    <Text style={style.subjectText}>{item.subject}</Text>
                    <Text style={style.durationText}>{item.duration}</Text>
                </View>

                <View>
                    <Text style={style.taskText}>{"Tasks"}</Text>
                    <Text style={style.taskCountText}>{item.tasks}</Text>
                </View>

                <View>
                    <CustomSwitch
                        onPress={() => updateSelected(item.key)}
                        isEnabled={item.selected}
                    />
                </View>
                <TouchableOpacity activeOpacity={constants.appConstants.activeOpacity}
                    hitSlop={constants.appConstants.hitSlop}
                >
                    <Image source={getImageFromURL(IMAGES.BACK_ARROW_ICON)}
                        style={style.arrowIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <CustomHeader
                title="Study Schedule"
                dateRequire
            />

            <View style={{ marginTop: 15 }}>
                <DaysList />
            </View>
            <Text style={style.sectionTitle}>{"Subject Planner"}</Text>

            <FlatList
                bounces={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />

            <View style={style.shadowContainer}>
                <View style={style.contentContainer}>
                    <View>
                        <Text style={style.estimatedText}>{"Estimated Time"}</Text>
                        <Text style={style.priceText}>{"8 Hours"}</Text>
                        <Text style={style.titleText}>{"22 Tasks"}</Text>
                    </View>
                    <CustomButton buttonText="Schedule Now" mainWidth={190} mainHeight={50} onPress={() => { }} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Playlist