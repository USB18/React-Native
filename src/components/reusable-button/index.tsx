import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';
import constants from '../../constants';

const ReusableButton = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
            activeOpacity={constants.appConstants.activeOpacity}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ReusableButton;
