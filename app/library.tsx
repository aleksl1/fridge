import React, { FC, useContext, useState } from "react";
import { ScrollView, View } from "react-native";
import { Divider, Snackbar, Text } from "react-native-paper";
import { ItemListCtx } from "../store/ItemListCtx";
import { ItemCategory, ItemStatus } from "../store/ItemList.types";
import globalStyles from "../utils/globalStyles";
import CategoryChips from "../src/components/CategoryChips";
import LibraryListItem from "../src/components/list/LibraryListItem";
import { useLocalSearchParams } from "expo-router";
import { setTitleText } from "../utils/helpers";
import { theme } from "../utils/theme";

const Library: FC = () => {
  const { type } = useLocalSearchParams();
  const { items } = useContext(ItemListCtx);
  const [filters, setFilters] = useState<ItemCategory[]>([]);
  const [visible, setVisible] = React.useState(false);
  const showSnackbar = () => setVisible(true);
  const onDismissSnackBar = () => setVisible(false);
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

  return (
    <>
      <ScrollView>
        <View style={globalStyles.modalViewContainer}>
          <CategoryChips filters={filters} onChipPress={handleChipPress} />
          <Divider horizontalInset />
          {items
            .filter((item) => item.status === "itemLibrary")
            .filter((i) =>
              filters.length && i.category ? filters.includes(i.category) : i
            )
            .map((item, index) => {
              return (
                <LibraryListItem
                  key={`${item.name}-${index}`}
                  item={item}
                  onAdd={showSnackbar}
                />
              );
            })}
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ margin: 16, backgroundColor: theme.colors.primary }}
      >
        <Text
          variant="labelLarge"
          style={{ color: theme.colors.onPrimary }}
        >{`Item was added to your ${setTitleText(type as ItemStatus)}.`}</Text>
      </Snackbar>
    </>
  );
};

export default Library;
