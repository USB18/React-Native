import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IMAGES, getImageFromURL } from '../../constants/images';
import style from './style';
import constants from '../../constants';

const CustomHeader = ({ title, onBackPress, onSharePress, onBookmarkPress, imageRequire, dateRequire }: any) => {
    const currentDate = new Date();
    return (
        <View style={style.headerContainer}>
            <View style={style.headerLeft}>
                <TouchableOpacity
                    onPress={onBackPress}
                    hitSlop={constants.appConstants.hitSlop}
                    activeOpacity={constants.appConstants.activeOpacity}>
                    <Image
                        source={getImageFromURL(IMAGES.BACK_ARROW_ICON)}
                        style={style.backArrowIcon} />
                </TouchableOpacity>

                <Text style={style.headerText}>{title}</Text>
            </View>
            {
                imageRequire &&
                <View style={style.headerRight}>
                    <TouchableOpacity
                        onPress={onSharePress}
                        hitSlop={constants.appConstants.hitSlop}
                        activeOpacity={constants.appConstants.activeOpacity}>
                        <Image
                            source={getImageFromURL(IMAGES.SHARE_ICON)}
                            style={style.shareIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onBookmarkPress}
                        hitSlop={constants.appConstants.hitSlop}
                        activeOpacity={constants.appConstants.activeOpacity}>
                        <Image
                            source={getImageFromURL(IMAGES.BOOKMARK_TAB_ICON)}
                            style={style.bookmarkIcon} />
                    </TouchableOpacity>
                </View>
            }
            {
                dateRequire &&
                <View style={{  justifyContent: "center" }}>
                    <Text style={style.dateStyle}>{`July ${currentDate.getDate()}`}</Text>
                </View>

            }
        </View>
    );
};

export default CustomHeader;
