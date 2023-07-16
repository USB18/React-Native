import React from "react";
import { View, Text, TouchableOpacity, FlatList, } from "react-native";
import style from "./style";
import CustomRating from "../../../components/custom-rating";
import ReviewListItem from "../../../components/custom-review";
import CustomButton from "../../../components/custom-button/custom-button";
import DynamicProgressBar from "../../../components/progress-bar";
import { IMAGES, getImageFromURL } from "../../../constants/images";
import constants from "../../../constants";

const ReviewData = [
    {
        key: 0,
        name: "Emma Watson",
        rating: 4,
        date: "10/11/2022",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use ",
    },
    {
        key: 1,
        name: "Dwayne Johnson",
        rating: 3,
        date: "15/09/2022",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use ",
    },
    {
        key: 2,
        name: "Umesh Singh",
        rating: 4,
        date: "06/05/2022",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use ",
    },
];

const Reviews = () => {
    const reversedArr = [1, 2, 3, 4, 5].reverse();
    const totalRatings = 300;
    const averageRating = 4.0;

    const renderReviewItem = ({ item, index }: any) => (
        <ReviewListItem
            profileImageSource={getImageFromURL(IMAGES.PROFILE_TAB_ICON)}
            name={item.name}
            rating={item.rating}
            date={item.date}
            description={item.description}
            bottomHighlight={item.key !== ReviewData[ReviewData.length - 1].key} // Use 'item.key' to check for the last item
        />
    );

    return (
        <View style={{ marginHorizontal: 20,marginVertical:10 }}>
            <TouchableOpacity
                style={{ marginBottom: 20 }}
                activeOpacity={constants.appConstants.activeOpacity}
            >
                <Text style={style.sellAllText}>{"See all"}</Text>
            </TouchableOpacity>

            <View style={style.container}>
                <View>
                    <Text style={style.numberText}>{averageRating.toFixed(1)}</Text>
                    <CustomRating rating={averageRating} />
                    <Text style={style.ratingText}>{`${totalRatings} ratings`}</Text>
                </View>

                <View>
                    {reversedArr.map((item, index) => (
                        <View style={{ marginTop: 10 }} key={item}>
                            <DynamicProgressBar number={item} percentage={(item - 1) * 20} />
                        </View>
                    ))}
                </View>
            </View>

            <FlatList
                data={ReviewData.reverse()}
                renderItem={renderReviewItem}
                keyExtractor={(item) => item.key.toString()}
                contentContainerStyle={{ marginVertical: 20 }}
                disableVirtualization={true}
            />

            <CustomButton
                buttonText="Write Review"
                mainWidth="100%"
                mainHeight={56}
                fontSize={20}
            />
        </View>
    );
};

export default Reviews;
