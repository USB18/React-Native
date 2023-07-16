import { Image, View } from "react-native"
import { IMAGES, getImageFromURL } from "../../constants/images"

const CustomRating = ({ width, height, marginEnd ,rating}: any) => {
    const arr = [1, 2, 3, 4, 5]

    return (
        <View style={{ flexDirection: "row" }}>
            {arr.map((item, index) => {
                return (
                    <Image source={getImageFromURL(IMAGES.STAR_ICON)}
                        style={{ width: width || 16, height: height || 16, marginEnd: marginEnd || 5 }}
                        tintColor={rating<=index ? "#D9D9D9" : "#FAB606"}
                    />
                )
            })}
        </View>
    )
}

export default CustomRating