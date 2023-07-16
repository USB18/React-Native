import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import style from './style';
import constants from '../../constants';

const CustomButton = ({ onPress, mainWidth, mainHeight, fontSize, buttonText, iconSource, iconTintColor, backgroundColor, borderColor, marginLeft, width, height }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={constants.appConstants.activeOpacity}
            style={[style.mainContainer,
            {
                width: mainWidth || 164,
                height: mainHeight || 64,
                backgroundColor: backgroundColor || '#ED1B2F',
                borderWidth: borderColor ? 1 : 0,
                borderColor: borderColor || '#ED1B2F',
                marginLeft: marginLeft || 0
            }]}
            onPress={onPress}
        >
            {iconSource &&
                <Image
                    source={iconSource}
                    tintColor={iconTintColor || 'white'}
                    style={{
                        width: width || 20,
                        height: height || 20,
                    }}
                />
            }

            <View>
                <Text
                    style={[style.mainText,
                    {
                        color: iconTintColor || 'white',
                        fontSize: fontSize || 16,
                    }
                    ]}>
                    {buttonText}
                </Text>
                {buttonText === 'Download' && (
                    <Text
                        style={[style.downloadText,
                        { color: iconTintColor || 'white' }
                        ]}>
                        {'(200MB)'}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
