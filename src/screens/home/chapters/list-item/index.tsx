import { View, Text, TouchableOpacity, Image } from "react-native";
import constants from "../../../../constants";
import { IMAGES, getImageFromURL } from "../../../../constants/images";
import styles from "../style";

const ListItem = ({
    item,
    onPress,
    backgroundColor = "#FBFBFB",
    idWeight = "500",
    subjectWeight = "600",
    dividerRequire = false,
    mainContainer = false,
    subContainer = false,
}:any) => {
    const renderIcon = () => {
        const iconSource = item.isExpanded
            ? IMAGES.MINUS_ICON
            : IMAGES.ADD_ICON;
        return (
            <Image source={getImageFromURL(iconSource)} style={styles.icon} />
        );
    };

    const renderLockButton = () => {
        const iconSource = item.locked
            ? IMAGES.LOCK_ICON
            : IMAGES.PLAY_BUTTON;
        return (
            <Image source={getImageFromURL(iconSource)} style={styles.lockIcon} />
        );
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.rowContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[styles.idText, { fontWeight: idWeight }]}>
                        {`${item.id}.`}
                    </Text>
                    <View style={styles.textContainer}>
                        <Text style={[styles.subjectText, { fontWeight: subjectWeight }]}>
                            {item.subject}
                        </Text>
                        <View style={styles.chapterContainer}>
                            <Text style={styles.chapterText}>{item.chapter}</Text>
                            {dividerRequire && <View style={styles.divider} />}
                            <Text style={styles.durationText}>{item.duration}</Text>
                        </View>
                    </View>
                </View>

                {mainContainer && (
                    <TouchableOpacity
                        activeOpacity={constants.appConstants.activeOpacity}
                        hitSlop={constants.appConstants.hitSlop}
                        onPress={onPress}
                    >
                        {renderIcon()}
                    </TouchableOpacity>
                )}

                {subContainer && (
                    <TouchableOpacity
                        activeOpacity={constants.appConstants.activeOpacity}
                        hitSlop={constants.appConstants.hitSlop}
                        onPress={onPress}
                        style={styles.subContainer}
                    >
                        {renderLockButton()}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default ListItem;
