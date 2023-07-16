import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import { IMAGES, getImageFromURL } from '../../constants/images';

const DynamicProgressBar = ({ percentage, number }: any) => {
    const fillWidth = `${percentage}%`;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.numberStyle}>{number}</Text>
            <Image
                source={getImageFromURL(IMAGES.STAR_ICON)}
                style={styles.starStyle}
                tintColor={"#FAB606"}
            />
            <View style={styles.container}>
                <View style={[styles.fill, { width: fillWidth }]} />
            </View>
        </View>
    );
};

export default DynamicProgressBar;
