import React, { FC, useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Chip,
  Divider,
  HelperText,
  List,
  Text,
} from "react-native-paper";
import { ItemListCtx } from "../store/ItemListCtx";
import {
  ItemCategories,
  ItemCategory,
  ItemStatus,
  ListItemType,
} from "../store/ItemList.types";
import { spacing } from "../utils/spacing";
import globalStyles from "../utils/globalStyles";
import { categoryColors } from "../utils/helpers";
import { useLocalSearchParams } from "expo-router";
import AmountPicker from "../src/components/AmountPicker";

type RightProps = {
  item: ListItemType;
};
const ListItemRight: FC<RightProps> = ({ item }) => {
  const { type } = useLocalSearchParams();
  const { addItem } = useContext(ItemListCtx);
  const [amount, setAmount] = useState(0);
  const decrement = () => amount > 1 && setAmount((prev) => prev - 1);
  const increment = () => setAmount((prev) => prev + 1);
  const onAddPress = () => {
    addItem({
      ...item,
      status: type as ItemStatus,
      quantity: amount,
      diaryDate: type === "foodDiary" ? new Date() : undefined,
    });
    setAmount(0);
  };
  return (
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
  );
};

const Library: FC = () => {
  const { items } = useContext(ItemListCtx);
  const [filters, setFilters] = useState<ItemCategory[]>([]);

  const handleChipPress = (c: ItemCategory) => {
    if (filters.includes(c)) {
      const removeIndex = filters.findIndex((f) => f === c);
      const newFilters = [...filters];
      newFilters.splice(removeIndex, 1);
      setFilters([...newFilters]);
    } else {
      setFilters([...filters, c]);
    }
  };

  const availableFilters = [...ItemCategories];
  const categoryChips = availableFilters?.map((c) => {
    const isSelected = filters.includes(c);
    return (
      <Chip
        mode="outlined"
        selected={isSelected}
        key={c}
        onPress={() => handleChipPress(c)}
        selectedColor={categoryColors[c]}
      >
        {c}
      </Chip>
    );
  });
  return (
    <ScrollView>
      <View style={globalStyles.modalViewContainer}>
        <View>
          <HelperText type={"info"}>Categories:</HelperText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {categoryChips}
          </ScrollView>
        </View>
        <Divider horizontalInset />
        {items
          .filter((item) => item.status === "itemLibrary")
          .filter((i) =>
            filters.length && i.category ? filters.includes(i.category) : i
          )
          .map((item, index) => {
            return (
              <List.Item
                key={`${item.name}-${index}`}
                title={<Text variant="bodyLarge">{item.name}</Text>}
                right={() => <ListItemRight item={item} />}
                style={styles.listItem}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Library;

const styles = StyleSheet.create({
  listItem: {
    paddingStart: 8,
    paddingVertical: 0,
    borderBottomWidth: 0.5,
  },
  title: {
    margin: spacing.spacing16,
    marginBottom: 0,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
