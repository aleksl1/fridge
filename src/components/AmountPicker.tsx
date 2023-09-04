import { FC } from "react";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";

type AmountPickerProps = {
  onMinusPress: () => void;
  onPlusPress: () => void;
  badgeAmount: number;
};

const AmountPicker: FC<AmountPickerProps> = ({
  onMinusPress,
  onPlusPress,
  badgeAmount,
}) => {
  const {
    colors: { secondary },
  } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <IconButton icon="minus" onPress={onMinusPress} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          backgroundColor: secondary,
        }}
      >
        <Text
          variant="titleMedium"
          style={{
            color: "white",
          }}
        >
          {badgeAmount}
        </Text>
      </View>
      <IconButton icon="plus" onPress={onPlusPress} />
    </View>
  );
};

export default AmountPicker;
