import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import style from './style';

interface TabIconProps {
    isFocused: boolean;
    Icon: ImageSourcePropType;
    label: string;
}

const TabIcon: React.FC<TabIconProps> = ({
    isFocused,
    Icon,
    label,
}) => {
    return (
        <View style={style.container}>
            <View style={isFocused ? style.viewFocus : {}}>
                <Image
                    source={Icon}
                    resizeMode="contain"
                    style={style.iconStyle}
                    tintColor={isFocused ? "#FFFFFF" : "#444444"}
                />
            </View>
            <Text style={[
                style.iconTextStyle,
                {
                    color: isFocused ? "#ED1B2F" : "#444444",
                    marginTop: isFocused ? 1 : 9,
                },
            ]}>
                {label}
            </Text>
        </View>
    );
};

export default TabIcon;