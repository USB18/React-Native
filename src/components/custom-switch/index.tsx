import { View } from "react-native"
import { Switch } from "react-native-switch"

const CustomSwitch = ({ isEnabled, onPress }: any) => {
    return (
        <View>
            <Switch
                onValueChange={onPress}
                value={isEnabled}
                circleSize={15}
                barHeight={17}
                circleBorderWidth={0}
                renderActiveText={false}
                renderInActiveText={false}
                backgroundActive={"#60AB15"}
                backgroundInactive={"lightgray"}
                circleActiveColor={"white"}
                circleInActiveColor={"white"}
                switchLeftPx={2.3}
                switchRightPx={2.3}
                innerCircleStyle={{
                    height: 13,
                    width: 13,
                    borderRadius: 6.5
                }}
            />
        </View>
    )
}

export default CustomSwitch