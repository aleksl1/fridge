import React, { FC, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { ItemListCtx } from "../../../store/ItemListCtx";
import { ItemStatus, ListItemType } from "../../../store/ItemList.types";
import AmountPicker from "../AmountPicker";

type LibraryListItemProps = {
  item: ListItemType;
  onAdd: () => void;
};

const LibraryListItem: FC<LibraryListItemProps> = ({ item, onAdd }) => {
  const { type } = useLocalSearchParams();
  const { addItem } = useContext(ItemListCtx);
  const [amount, setAmount] = useState(0);
  const decrement = () => amount > 1 && setAmount((prev) => prev - 1);
  const increment = () => setAmount((prev) => prev + 1);
  const onAddPress = () => {
    const addSuccess = addItem({
      ...item,
      status: type as ItemStatus,
      quantity: amount,
      diaryDate: type === "foodDiary" ? new Date() : undefined,
    });
    if (addSuccess) {
      setAmount(0);
      onAdd();
    }
  };

  return (
    <List.Item
      title={<Text variant="bodyLarge">{item.name}</Text>}
      right={() => (
        <View style={styles.rightContainer}>
          <AmountPicker
            onMinusPress={decrement}
            onPlusPress={increment}
            badgeAmount={amount}
          />
          <Button onPress={onAddPress} mode="contained">
            Add
          </Button>
        </View>
      )}
      style={styles.listItem}
    />
  );
};

export default LibraryListItem;

const styles = StyleSheet.create({
  listItem: {
    paddingStart: 8,
    paddingVertical: 0,
    borderBottomWidth: 0.5,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
