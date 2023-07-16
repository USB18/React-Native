import React, { useRef, useState } from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView
} from "react-native";

import CustomButton from "../../components/custom-button/custom-button";
import CustomHeader from "../../components/custom-header/custom-header";
import Chapters from "./chapters";
import Reviews from "./reviews";
import CustomSelect from "../../components/custome-select";

import { IMAGES, getImageFromURL } from "../../constants/images";
import constants from "../../constants";
import style from "./style";

const width = Dimensions.get("window").width;

const slider_data = [
    {
        key: 0,
        image: getImageFromURL(IMAGES.SLIDER_IMAGE)
    },
    {
        key: 1,
        image: getImageFromURL(IMAGES.SLIDER_IMAGE)
    },
    {
        key: 2,
        image: getImageFromURL(IMAGES.SLIDER_IMAGE)
    }
];

const SliderItem = ({ item }: any) => {
    return (
        <View style={style.sliderItemContainer}>
            <View style={style.sliderItemInnerContainer}>
                <Image source={item.image} resizeMode="contain" />
                <Image source={getImageFromURL(IMAGES.PLAY_ICON)} style={style.playIcon} />
            </View>
        </View>
    );
};

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [keyId, setKeyId] = useState(0);

    const ref = useRef(null);

    const keyExtractor = (item: any, index: { toString: () => any; }) => index.toString();

    const updateCurrentIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentindex = Math.round(contentOffsetX / width);
        setCurrentIndex(currentindex);
    };

    const renderContent = () => {
        if (keyId === 0) {
            return <Chapters />;
        } else if (keyId === 1) {
            return <Reviews />;
        }
        return null;
    };

    return (
        <SafeAreaView style={style.mainContainer}>
            {/* Header */}
            <CustomHeader
                title="The Legacy Helen Row"
                onBackPress={() => { }}
                onSharePress={() => { }}
                onBookmarkPress={() => { }}
            />
            <ScrollView showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
                {/* slider */}
                <View style={style.flatlistView}>
                    <View>
                        <FlatList
                            ref={ref}
                            bounces={false}
                            extraData={slider_data}
                            data={slider_data}
                            renderItem={({ item }) => <SliderItem item={item} />}
                            keyExtractor={keyExtractor}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={updateCurrentIndex}
                            disableVirtualization={true}
                        />
                        <View style={style.footerContainer}>
                            {slider_data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        style.footerDot,
                                        currentIndex === index && style.footerDotActive
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    {/* content */}
                    <View style={style.headerView}>
                        <Text style={style.contentHeaderText}>{"The Legacy Helen Row (105hr)"}</Text>
                        <View style={style.ratingContainer}>
                            <Text style={style.ratingText}>{"4.5"}</Text>
                            <Image
                                source={getImageFromURL(IMAGES.STAR_ICON)}
                                style={style.rateIcon}
                                tintColor={"white"}
                            />
                        </View>
                    </View>

                    <View style={style.metaDataContainer}>
                        <Text style={style.metadataText}>{"By : "}</Text>
                        <Text style={style.metaDataContent}>{"Jeremy Irons"}</Text>

                        <View style={style.divider} />

                        <Text style={style.metadataText}>{"Source : "}</Text>
                        <Text style={style.metaDataContent}>{"1PK"}</Text>
                        <View style={style.divider} />

                        <Text style={style.metadataText}>{"Listen : "}</Text>
                        <Text style={style.metaDataContent}>{"400K"}</Text>
                    </View>

                    <Text style={style.contentText}>
                        {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown make a type specimen book."}
                    </Text>

                    {/* buttons */}
                    <View style={{ flexDirection: "row", marginVertical: 25, justifyContent: "space-between" }}>
                        <CustomButton
                            // onPress={handlePlayAudio}
                            buttonText="Play Audio"
                            iconSource={getImageFromURL(IMAGES.AUDIO_ICON)}
                            width={26}
                            height={22}
                        />

                        <CustomButton
                            //onPress={handleDownload}
                            buttonText="Download"
                            iconSource={getImageFromURL(IMAGES.ARROW_DOWN_ICON)}
                            iconTintColor="#ED1B2F"
                            borderColor="#ED1B2F"
                            backgroundColor="white"
                        // marginLeft={20}
                        />
                    </View>

                    {keyId === 0 && (
                        <View style={{ flexDirection: "row" }}>
                            <CustomSelect
                                onPress={() => { }}
                                text="Buy hard copy"
                                imageSource={getImageFromURL(IMAGES.FRAME_ICON)}
                            />
                            <CustomSelect
                                onPress={() => { }}
                                text="Create Book"
                                imageSource={getImageFromURL(IMAGES.WRITE_ICON)}
                            />
                            <CustomSelect
                                onPress={() => { }}
                                text="Video"
                                imageSource={getImageFromURL(IMAGES.VIDEO_ICON)}
                            />
                        </View>
                    )}

                    <View style={style.switchView}>
                        <TouchableOpacity
                            activeOpacity={constants.appConstants.activeOpacity}
                            onPress={() => setKeyId(0)}
                            style={{ height: 50 }}
                        >
                            <View style={style.firstSwitchView}>
                                <Text
                                    style={[
                                        style.firstSwitchText,
                                        { color: keyId === 0 ? "#ED1B2F" : "#444444" }
                                    ]}
                                >
                                    {"CHAPTERS"}
                                </Text>
                                <View
                                    style={[
                                        style.switchNumberView,
                                        { backgroundColor: keyId === 0 ? "#FFE0E3" : "#EDEDED" }
                                    ]}
                                >
                                    <Text
                                        style={[
                                            style.switchNumber,
                                            { color: keyId === 0 ? "#ED1B2F" : "#444444" }
                                        ]}
                                    >
                                        {"50"}
                                    </Text>
                                </View>
                            </View>
                            {keyId === 0 && <View style={style.bottomView} />}
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={constants.appConstants.activeOpacity}
                            onPress={() => setKeyId(1)}
                            style={{ height: 50 }}
                        >
                            <Text
                                style={[
                                    style.secondSwitchText,
                                    { color: keyId === 1 ? "#ED1B2F" : "#444444" }
                                ]}
                            >
                                {"REVIEWS"}
                            </Text>
                            {keyId === 1 && <View style={style.bottomView} />}
                        </TouchableOpacity>
                    </View>
                </View>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
