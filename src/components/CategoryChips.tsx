import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { Chip, HelperText } from "react-native-paper";
import { categoryColors } from "../../utils/helpers";
import { ItemCategories, ItemCategory } from "../../store/ItemList.types";
import { theme } from "../../utils/theme";

type CategoryChipsProps = {
  filters: ItemCategory[];
  onChipPress: (c: ItemCategory) => void;
};

const CategoryChips: FC<CategoryChipsProps> = ({ filters, onChipPress }) => {
  return (
    <View>
      <HelperText type={"info"}>Categories:</HelperText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        {[...ItemCategories]?.map((c) => {
          const isSelected = filters.includes(c);
          return (
            <Chip
              mode="outlined"
              selected={isSelected}
              key={c}
              onPress={() => onChipPress(c)}
              selectedColor={
                isSelected ? theme.colors.onPrimary : categoryColors[c]
              }
              showSelectedOverlay
              style={isSelected && { backgroundColor: categoryColors[c] }}
            >
              {c}
            </Chip>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryChips;
