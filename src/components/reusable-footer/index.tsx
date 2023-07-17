import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';
import constants from '../../constants';

const ReusableFooter = ({ text, style, onpress, fontSize }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={constants.appConstants.activeOpacity}
            onPress={onpress}
            style={[styles.container, style]}>
            <Text style={[styles.text, { fontSize: fontSize || 12 }]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ReusableFooter;
