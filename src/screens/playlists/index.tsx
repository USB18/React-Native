import React, { useEffect, useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import DatePicker from "react-native-date-picker";

import CustomHeader from "../../components/custom-header/custom-header";
import CustomButton from "../../components/custom-button/custom-button";
import CustomSwitch from "../../components/custom-switch";
import DaysList from "../../components/custom-day-week";

import style from "./style";
import { IMAGES, getImageFromURL } from "../../constants/images";
import constants from "../../constants";
import { configure, scheduleNotification } from "../../utils/NotificationService";

const subjectTiming = [
    {
        key: 1,
        subject: "Math",
        duration: "01:30 hours",
        tasks: "0/12",
        selected: false,
        showTime: false,
    },
    {
        key: 2,
        subject: "English",
        duration: "01:30 hours",
        tasks: "0/12",
        selected: false,
        showTime: false,
    },
    {
        key: 3,
        subject: "Reasoning",
        duration: "00:30 hours",
        tasks: "0/12",
        selected: false,
        showTime: false,
    },
    {
        key: 4,
        subject: "GA - History",
        duration: "01:00 hours",
        tasks: "0/12",
        selected: false,
        showTime: false,
    },
];

const Playlist = () => {
    const [data, setData] = useState(subjectTiming);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimes, setSelectedTimes] = useState<{ subject: string; time: Date }[]>([]);
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    useEffect(() => {
        configure()
    }, []);

    const updateSelected = (itemId: number) => {
        const updatedData = data.map((item) => {
            if (item.key === itemId) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            } else {
                return item;
            }
        });
        setData(updatedData);
    };

    const handleTimeSelection = (date: Date, item: typeof subjectTiming[0]) => {
        const currentTime = new Date();
        if (date <= currentTime) {
            Alert.alert("Please select a future time.");
            return;
        }

        const selectedDateTime = date.getTime();

        const isTimeTaken = selectedTimes.some((selectedTime) => {
            const selectedTimeInMilliseconds = selectedTime.time.getTime();
            return selectedTimeInMilliseconds === selectedDateTime;
        });

        if (isTimeTaken) {
            Alert.alert("This time slot has already been taken. Please select another time.");
            return;
        }

        const updatedData = data.map((dataItem) => {
            if (dataItem.key === item.key) {
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const isAM = hours < 12;
                const period = isAM ? "AM" : "PM";

                return {
                    ...dataItem,
                    showTime: true,
                    time: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${period}`,
                };
            }
            return dataItem;
        });

        setDatePickerVisible(false);
        setData(updatedData);
        setSelectedDate(date);

        const updatedSelectedTimes = selectedTimes.filter(
            (selectedTime) => selectedTime.subject !== item.subject
        );
        updatedSelectedTimes.push({ subject: item.subject, time: date });
        setSelectedTimes(updatedSelectedTimes);
    };

    const renderItem = ({ item }: any) => {
        const isSelected = item.selected;

        const handleArrowPress = () => {
            if (isSelected) {
                setDatePickerVisible(!datePickerVisible);
            }
        };

        return (
            <View style={style.listItemContainer}>
                <View style={style.listItemHeader}>
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
                    <TouchableOpacity
                        onPress={handleArrowPress}
                        activeOpacity={constants.appConstants.activeOpacity}
                        hitSlop={constants.appConstants.hitSlop}
                    >
                        <Image
                            source={getImageFromURL(IMAGES.BACK_ARROW_ICON)}
                            style={style.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                {isSelected && (
                    <>
                        <View style={style.divider} />
                        <View style={style.scheduledTimeContainer}>
                            <Text style={style.scheduledTimeLabel}>{"Scheduled Time"}</Text>
                            <Text style={style.scheduledTimeText}>{item.time}</Text>
                        </View>
                    </>
                )}
                {isSelected && datePickerVisible && (
                    <DatePicker
                        modal
                        open={datePickerVisible}
                        date={selectedDate}
                        onConfirm={(date) => handleTimeSelection(date, item)}
                        onCancel={() => setDatePickerVisible(false)}
                        mode="time"
                    />
                )}
            </View>
        );
    };

    const handleSchedulePress = () => {
        if (selectedTimes.length === 0) {
            Alert.alert("Please select at least one subject.");
            return;
        }
        selectedTimes.forEach((selectedTime) => {
            const { subject, time } = selectedTime;
            scheduleNotification(subject, time);
        });

        Alert.alert("Study reminders have been scheduled successfully.");
    };

    return (
        <SafeAreaView style={style.mainContainer}>
            <CustomHeader title="Study Schedule" dateRequire />
            <View style={{ marginTop: 15 }}>
                <DaysList />
            </View>
            <Text style={style.sectionTitle}>{"Subject Planner"}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key.toString()}
                showsVerticalScrollIndicator={false}
            />
            <View style={style.shadowContainer}>
                <View style={style.contentContainer}>
                    <View>
                        <Text style={style.estimatedText}>{"Estimated Time"}</Text>
                        <Text style={style.priceText}>{"8 Hours"}</Text>
                        <Text style={style.titleText}>{"22 Tasks"}</Text>
                    </View>
                    <CustomButton
                        buttonText="Schedule Now"
                        mainWidth={190}
                        mainHeight={50}
                        onPress={handleSchedulePress}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Playlist;
