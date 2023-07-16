import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomRating from '../custom-rating';
import styles from './style';

const ReviewItem = ({
    profileImageSource,
    name,
    rating,
    date,
    description,
    bottomHighlight = true,
}: any) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImage}>
                        <Image
                            source={profileImageSource}
                            style={styles.profile}
                            resizeMode="cover"
                        />
                    </View>
                    <Text style={styles.name}>{name}</Text>
                </View>

                <View style={styles.ratingContainer}>
                    <CustomRating rating={rating} />
                    <Text style={styles.date}>{date}</Text>
                </View>

                <Text style={styles.description}>{description}</Text>
            </View>
            {bottomHighlight && <View style={styles.bottomHighlight} />}
        </>
    );
};

export default ReviewItem;
