import React, { FC } from "react";
import { FAB } from "react-native-paper";
import { spacing } from "../../utils/spacing";
import { useRouter } from "expo-router";
import { ItemStatus } from "../../store/ItemList.types";
import { emojis, isWeb } from "../../utils/constants";
import { StyleSheet } from "react-native";

type AddButtonProps = {
  type: ItemStatus;
};

const FABAdd: FC<AddButtonProps> = ({ type }) => {
  const router = useRouter();
  if (isWeb) {
    return (
      <FAB
        label={emojis.plus}
        style={styles.fabStyle}
        onPress={() => router.push({ pathname: "/library", params: { type } })}
      />
    );
  }
  return (
    <FAB
      icon="plus"
      style={styles.fabStyle}
      onPress={() => router.push({ pathname: "/library", params: { type } })}
    />
  );
};

export default FABAdd;

const styles = StyleSheet.create({
  fabStyle: {
    position: "absolute",
    margin: spacing.spacing16,
    right: 0,
    bottom: 0,
  },
});
