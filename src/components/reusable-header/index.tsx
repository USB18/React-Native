import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './style';
import constants from '../../constants';

const ReusableHeader = ({ onPress, imageSource, style }: any) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, style]}
            onPress={onPress}
            activeOpacity={constants.appConstants.activeOpacity}
            hitSlop={constants.appConstants.hitSlop}
        >
            <Image source={imageSource} />
        </TouchableOpacity>
    );
};
export default ReusableHeader;
