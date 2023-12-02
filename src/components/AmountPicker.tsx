import { FC } from "react";
import { View } from "react-native";
import { Button, IconButton, Text, useTheme } from "react-native-paper";
import { emojis, isWeb } from "../../utils/constants";

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
      {isWeb ? (
        <Button onPress={onMinusPress}>{emojis.minus}</Button>
      ) : (
        <IconButton icon="minus" onPress={onMinusPress} />
      )}
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
      {isWeb ? (
        <Button onPress={onPlusPress}>{emojis.plus}</Button>
      ) : (
        <IconButton icon="plus" onPress={onPlusPress} />
      )}
    </View>
  );
};

export default AmountPicker;
