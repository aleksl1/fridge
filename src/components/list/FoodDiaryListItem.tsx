import { FunctionComponent } from "react";
import { CustomListItemProps } from "./CustomListItem";
import { DataTable } from "react-native-paper";
import { calculateCaloriesFromMacros } from "../../../utils/helpers";
import { ListItemActionsMenu } from "./ListItemActionsMenu";
import { StyleSheet, View } from "react-native";
import { theme } from "../../../utils/theme";

type FoodDiaryListItemProps = CustomListItemProps;

const FoodDiaryListItem: FunctionComponent<FoodDiaryListItemProps> = (
  itemProps
) => {
  const {
    macrosPerPiece: { fats, proteins, carbs },
    quantity,
    name,
  } = itemProps.item;
  console.log("quantity * fats", quantity * fats);
  return (
    <View style={container}>
      <View style={dotsContainer}>
        <ListItemActionsMenu {...itemProps} onAddToNextListPress={undefined} />
      </View>
      <DataTable.Row style={{ flex: 1 }}>
        <DataTable.Cell style={{ flex: 2 }}>
          {quantity} of {name}
        </DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.round(
            quantity * calculateCaloriesFromMacros({ proteins, fats, carbs })
          )}
        </DataTable.Cell>
        <DataTable.Cell numeric>{Math.round(quantity * fats)}</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.round(quantity * proteins)}
        </DataTable.Cell>
        <DataTable.Cell numeric>{Math.round(quantity * carbs)}</DataTable.Cell>
      </DataTable.Row>
    </View>
  );
};

export default FoodDiaryListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.outline,
  },
  dotsContainer: {
    backgroundColor: theme.colors.tertiaryContainer,
  },
  borderRadius: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

const container = StyleSheet.compose(styles.container, styles.borderRadius);
const dotsContainer = StyleSheet.compose(
  styles.dotsContainer,
  styles.borderRadius
);
