import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import ListItem from "./list-item"
import CustomButton from "../../../components/custom-button/custom-button"
import { IMAGES, getImageFromURL } from "../../../constants/images"
import constants from "../../../constants"
import style from "./style"

const chapters = [
    {
        id: 1,
        subject: "SSC Mathematics",
        chapter: "11 Chapters",
        duration: "5h 30 minutes",
        isExpanded: false
    },
    {
        id: 2,
        subject: "SSC Mathematics",
        chapter: "11 Chapters",
        duration: "5h 30 minutes",
        isExpanded: false
    },
    {
        id: 3,
        subject: "SSC Mathematics",
        chapter: "11 Chapters",
        duration: "5h 30 minutes",
        isExpanded: false
    },
    {
        id: 4,
        subject: "SSC Mathematics",
        chapter: "11 Chapters",
        duration: "5h 30 minutes",
        isExpanded: false
    }
]

const firstChapter = [
    {
        id: "A",
        subject: "Relational Operators",
        duration: "Audio - 2:30 min",
        locked: false
    },
    {
        id: "B",
        subject: "Relational Operators",
        duration: "Audio - 2:30 min",
        locked: false
    },
    {
        id: "C",
        subject: "Relational Operators",
        duration: "Audio - 2:30 min",
        locked: true
    },
    {
        id: "D",
        subject: "Relational Operators",
        duration: "Audio - 2:30 min",
        locked: false
    },
    {
        id: "E",
        subject: "Relational Operators",
        duration: "Audio - 2:30 min",
        locked: true
    }
]

const Chapters = () => {
    const [items, setItems] = useState(chapters);

    const toggleItem = (itemId: any) => {
        const data = items.map((item) =>
            item.id === itemId ? { ...item, isExpanded: !item.isExpanded } : item
        );
        setItems(data);
    };

    const renderList = ({ item }: any) => {
        return (
            <>
                <ListItem
                    key={item.id}
                    item={item}
                    dividerRequire
                    mainContainer
                    onPress={() => toggleItem(item.id)}
                />
                {item.isExpanded &&
                    firstChapter.map((subItem) => (
                        <ListItem
                            key={`${item.id}-${subItem.id}`}
                            item={subItem}
                            subContainer
                            backgroundColor={"white"}
                            idWeight={"400"}
                            subjectWeight={"400"}
                            onPress={() => { }}
                        />
                    ))}
            </>
        );
    };

    return (
        <View>
            <FlatList
                data={items}
                extraData={items}
                renderItem={renderList}
                disableVirtualization={true}
                keyExtractor={(item) => item.id.toString()}
            />

            <View style={style.shadowContainer}>
                <View style={style.contentContainer}>
                    <View>
                        <View style={style.priceContainer}>
                            <Text style={style.priceText}>₹ 100</Text>
                            <Text style={style.originalPriceText}>₹ 400</Text>
                        </View>
                        <Text style={style.titleText}>Weekly Buy</Text>
                    </View>
                    <CustomButton buttonText="Buy Now" mainWidth={180} mainHeight={50} onPress={() => { }} />
                </View>
            </View>

            <View style={style.footerContainer}>
            <View style={style.progressBar}/>
                <View style={style.movieDetailsContainer}>
                    <View style={style.movieInfoContainer}>
                        <Image source={getImageFromURL(IMAGES.PLACEHOLDER_IMAGE)} style={style.movieImage} />
                        <View style={style.movieInfoText}>
                            <Text style={style.movieTitle}>The Legacy Helen Row</Text>
                            <Text style={style.actorText}>Jeremy Irons</Text>
                        </View>
                    </View>

                    <View style={style.movieInfoContainer}>
                        <TouchableOpacity
                            activeOpacity={constants.appConstants.activeOpacity}
                            hitSlop={constants.appConstants.hitSlop}
                            onPress={() => { }}
                            style={style.playButtonContainer}
                        >
                            <Image source={getImageFromURL(IMAGES.PLAY_BUTTON)} tintColor={"white"} style={style.playButton} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={constants.appConstants.activeOpacity} hitSlop={constants.appConstants.hitSlop}>
                            <Image source={getImageFromURL(IMAGES.RIGHT_ARROW)} style={style.rightArrow} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Chapters