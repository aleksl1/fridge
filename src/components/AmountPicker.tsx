import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
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
  return (
    <View style={styles.container}>
      {isWeb ? (
        <Pressable onPress={onMinusPress} style={styles.webButton}>
          <Text>{emojis.minus}</Text>
        </Pressable>
      ) : (
        <IconButton icon="minus" onPress={onMinusPress} />
      )}
      <Text variant="titleLarge" style={styles.badgeContainer}>
        {badgeAmount}
      </Text>
      {isWeb ? (
        <Pressable onPress={onPlusPress} style={styles.webButton}>
          <Text>{emojis.plus}</Text>
        </Pressable>
      ) : (
        <IconButton icon="plus" onPress={onPlusPress} />
      )}
    </View>
  );
};

export default AmountPicker;

const styles = StyleSheet.create({
  webButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  badgeContainer: {
    marginTop: 2,
  },
});
