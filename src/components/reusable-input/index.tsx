import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './style';

const ReusableTextInput = ({ placeholder, value, imageSource, onChangeText }: any) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                placeholder={placeholder}
                placeholderTextColor={isFocused ? 'gray' : '#353A48'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChangeText={onChangeText}
            />
            {
                !isFocused &&
                <View style={{ position: "absolute", right: 0 }}>
                    <Image source={imageSource} style={styles.icon} />
                </View>
            }
        </View>
    );
};

export default ReusableTextInput;
