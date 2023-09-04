import { FunctionComponent } from "react";
import { CustomListItemProps } from "./CustomListItem";
import { Divider, List, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { spacing } from "../utils/spacing";
import { CURRENCY } from "../utils/constants";

type FoodDiaryListItemProps = CustomListItemProps;

const ExpensesListItem: FunctionComponent<FoodDiaryListItemProps> = (
  itemProps
) => {
  const { name, quantity, costPerItem } = itemProps.item;
  const {
    colors: { primary },
  } = useTheme();

  const title = `${quantity} of ${name}, total cost: ${
    costPerItem && quantity * costPerItem
  } ${CURRENCY}`;

  return (
    <View style={{ gap: spacing.spacing8 }}>
      <List.Item
        title={<Text variant="titleLarge">{title}</Text>}
        style={{
          paddingEnd: 0,
          padding: 0,
          margin: 0,
          borderColor: primary,
        }}
      />
      <Divider />
    </View>
  );
};

export default ExpensesListItem;
