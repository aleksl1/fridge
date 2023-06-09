import { FC, useCallback, useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, HelperText, List, Text } from "react-native-paper";
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
import { theme } from "../src/AppWrapper";
import { useLocalSearchParams } from "expo-router";

const Library: FC = () => {
  const { type } = useLocalSearchParams();
  const { addItem, items } = useContext(ItemListCtx);
  const [filters, setFilters] = useState<ItemCategory[]>([]);
  const onItemPress = useCallback(
    (item: ListItemType) =>
      addItem({
        ...item,
        status: type as ItemStatus,
        quantity: 1,
        diaryDate: type === "foodDiary" ? new Date() : undefined,
      }),
    [addItem]
  );

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
  const categoryChips = availableFilters?.map((c, i) => {
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
          <HelperText type={"info"}>categories:</HelperText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {categoryChips}
          </ScrollView>
        </View>
        <Text variant="titleLarge" style={styles.title}>
          Items library:
        </Text>
        {items
          .filter((item) => item.status === "itemLibrary")
          .filter((i) =>
            filters.length && i.category ? filters.includes(i.category) : i
          )
          .map((item, index) => {
            return (
              <List.Item
                onPress={() => onItemPress(item)}
                key={`${item.name}-${index}`}
                title={<Text variant="bodyLarge">{item.name}</Text>}
                right={() => <List.Icon icon="plus" />}
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
    borderBottomWidth: 1,
    borderColor: theme.colors.primary,
  },
  title: {
    margin: spacing.spacing16,
    marginBottom: 0,
  },
});
