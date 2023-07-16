import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import constants from '../../constants';

const CustomSelect = ({ onPress, text, imageSource }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={constants.appConstants.activeOpacity}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 36,
                paddingHorizontal: 10,
                marginRight: 10,
                borderRadius: 90,
                backgroundColor: '#F2F2F2',
            }}
            onPress={onPress}
        >
            <Image
                source={imageSource}
                style={{ width: 12, height: 12 }}
                resizeMode="contain"
            />
            <Text
                style={{
                    fontWeight: '400',
                    fontSize: 13,
                    marginLeft: 5,
                    color:"#444444"
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomSelect;
