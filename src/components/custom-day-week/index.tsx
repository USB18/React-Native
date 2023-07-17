import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import constants from '../../constants';
import styles from './style';

const getCurrentMonthDays = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days.map((day) => {
        const currentDay = day === currentDate.getDate();
        const weekDayIndex = (firstDay + day - 1) % 7;
        const weekName = weekNames[weekDayIndex];
        return { day, currentDay, weekName };
    });
};

const renderDayItem = ({ item }: any) => {
    const { day, currentDay, weekName } = item;
    return (
        <TouchableOpacity
            onPress={() => { }}
            activeOpacity={constants.appConstants.activeOpacity}
            style={[styles.dayContainer,
            {
                backgroundColor: currentDay ? "#ED1B2F" : "#FFFFFF",
                borderColor: currentDay ? "#ED1B2F" : '#CECFD5'
            }]}>
            <Text style={[styles.currentDayText,
            { color: currentDay ? "white" : '#444444', }]}>{day}</Text>
            <Text style={[styles.weekNameText,
            { color: currentDay ? "white" : "#444444" }]}>{weekName}</Text>
        </TouchableOpacity>
    );
};

const DaysList = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const daysOfMonth = getCurrentMonthDays();
    const scrollViewRef = useRef(null);

//     useEffect(() => {
//         const currentDate = new Date().getDate();
//         setSelectedDate(currentDate);
//         scrollToCurrentDate();
//     }, []);

//    const scrollToCurrentDate = () => {
//     const currentDayIndex = daysOfMonth.findIndex((item) => item.currentDay);
//     if (currentDayIndex !== -1) {
//       const scrollToX = currentDayIndex * 70; // Adjust the value as per your styling and layout
//       scrollViewRef.current.scrollTo({ x: scrollToX, animated: true });
//     }
//   };
    return (
        // <ScrollView
        //     horizontal
        //     ref={scrollViewRef}
        //     showsHorizontalScrollIndicator={false}
        //     onLayout={scrollToCurrentDate}
        // >
            <View style={styles.daysContainer}>
                <FlatList
                    data={daysOfMonth}
                    horizontal
                    renderItem={renderDayItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
       // </ScrollView>
    );

};

export default DaysList;